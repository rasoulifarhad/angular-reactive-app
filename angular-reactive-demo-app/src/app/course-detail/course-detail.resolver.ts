import { ResolveFn } from '@angular/router';
import { CoursesHttpService } from '../services/courses-http.service';
import { inject } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { Lesson } from '../shared/model/lesson';
import { Course } from '../shared/model/course';

export const courseDetailResolver: ResolveFn<{course: Course, lessons: Lesson[]}> = (route, state) => {
  const service = inject(CoursesHttpService);
  return service
    .findCourseById(route.params['id']).pipe(
      switchMap(course =>
        service.findLessonsForCourse(course.id).pipe(
          map(lessons => {
            return { course, lessons }
          }))
      )
    );
};
