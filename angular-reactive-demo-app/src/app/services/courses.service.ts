import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  findAllCourses(): Observable<Course[]> {
    return of([]);
  }

  findLatestLessons(): Observable<Lesson[]> {
    return of([]);
  }

  findCourseByUrl(courseUrl: string): Observable<Course> | undefined {
    return undefined;
  }

  findLessonsForCourse(courseId: number) : Observable<Lesson[]> {
    return of([]);
  }
}
