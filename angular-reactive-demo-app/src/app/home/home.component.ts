import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { CoursesService } from '../services/courses.service';
import { CoursesHttpService } from '../services/courses-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  courses$!: Observable<Course[]>;
  lessons$?: Observable<Lesson[]>;
  latestLessons$!: Observable<Lesson[]>;

  constructor(private readonly courseService: CoursesHttpService) { }

  ngOnInit(): void {
    this.courses$ = this.courseService.findAllCourses()
      .pipe(
        map(course => {
          console.log('course: ', course);
          return course;
          })
        );
    // this.latestLessons$ = this.courseService.findLatestLessons();
  }
}
