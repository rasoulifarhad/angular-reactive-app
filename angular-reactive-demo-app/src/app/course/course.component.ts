import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { CoursesHttpService } from '../services/courses-http.service';
import { LessonsPagerService } from '../services/lessons-pager.service';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit, OnDestroy {
  @Input() id!: string;

  course$?: Observable<Course>;
  lessons$: Observable<Lesson[]> | null = null;
  detail$?: Observable<Lesson>;

  constructor(
    private readonly courseService: CoursesHttpService,
    private readonly lessonsPagerService: LessonsPagerService,
    private readonly messagesService: MessagesService
  ) {}

  nextLessonsPage() {
    this.lessonsPagerService.next().subscribe(
      () => {},
      (err) => this.messagesService.error('Could not load next page')
    );
  }

  previousLessonsPage() {
    this.lessonsPagerService.previous().subscribe(
      () => {},
      (err) => this.messagesService.error('Could not load previous page')
    );
  }

  selectDetail(lesson: Lesson) {
    if (lesson?.url) {
      this.detail$ = this.courseService.findLessonDetailById(lesson.id);
    }
  }

  backToMaster() {
    this.detail$ = undefined;
  }

  ngOnDestroy() {
    console.log('destroying CourseComponent ...');
  }

  ngOnInit(): void {
    this.course$ = this.courseService.findCourseById(this.id);
    this.lessons$ = this.lessonsPagerService.lessonsPage$;

    this.lessonsPagerService.loadFirstPage(this.id).subscribe(
      () => {},
      (err) => this.messagesService.error('Could not load first page')
    );
  }
}
