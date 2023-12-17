import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from '../shared/model/course';
import { Lesson } from '../shared/model/lesson';

@Injectable({
  providedIn: 'root',
})
export class CoursesHttpService {
  baseUrl = 'http://localhost:3000';
  constructor(private readonly http: HttpClient) {}

  findAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/api/courses`);
  }

  findCourseById(courseId: string): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/api/courses/${courseId}`);
  }

  findLessonDetailById(lessonId: string): Observable<Lesson> {
    return this.http.get<Lesson>(`${this.baseUrl}/api/lessons/${lessonId}`);
  }

  findLessonsForCourse(courseId: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.baseUrl}/api/courses/${courseId}/lessons`);
  }
}
