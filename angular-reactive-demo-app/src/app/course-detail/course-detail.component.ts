import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  course$: Observable<Course> | undefined;
  lessons$: Observable<Lesson[]> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.course$ = this.route.data.pipe(map((res) => res['detail'].course));

    this.lessons$ = this.route.data.pipe(map((res) => res['detail'].lessons));
  }
}
