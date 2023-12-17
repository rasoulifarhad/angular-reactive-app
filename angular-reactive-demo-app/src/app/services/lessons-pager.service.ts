import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Lesson } from '../shared/model/lesson';

@Injectable({
  providedIn: 'root',
})
export class LessonsPagerService {
  private static readonly PAGE_SIZE = 2;

  currentPageNumber = 1;

  private courseId!: string;

  private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

  lessonsPage$ = this.lessonsSubject.asObservable();

  constructor(private readonly http: HttpClient) {
    console.log('LessonsPagerService instance created ..');
  }

  loadFirstPage(courseId: string): Observable<any> {
    this.courseId = courseId;
    this.currentPageNumber = 1;
    return this.loadPage(this.currentPageNumber);
  }

  next(): Observable<any> {
    this.currentPageNumber += 1;
    return this.loadPage(this.currentPageNumber);
  }

  previous(): Observable<any> {
    if (this.currentPageNumber - 1 >= 1) {
      this.currentPageNumber -= 1;
    }
    return this.loadPage(this.currentPageNumber);
  }

  loadPage(pageNumber: number): Observable<any> {
    return this.http
      .get<Lesson[]>('/api/lessons', {
        params: {
          courseId: this.courseId,
          pageNumber,
          pageSize: LessonsPagerService.PAGE_SIZE,
        },
      })
      .pipe(map((res) => res));
  }
}
