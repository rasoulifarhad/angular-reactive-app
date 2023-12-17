import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Lesson } from '../shared/model/lesson';
import { store } from '../event-bus-experiments/app-data';

@Component({
  selector: 'app-event-bus-lessons-list',
  templateUrl: './event-bus-lessons-list.component.html',
  styleUrls: ['./event-bus-lessons-list.component.css'],
})
export class EventBusLessonsListComponent implements OnInit, Observer<Lesson[]> {
  lessons: Lesson[] = [];
  @Output() selected = new EventEmitter<Lesson>();

  ngOnInit(): void {
    console.log('lesson list component is registered as observer ..');

    store.lessonsList$.subscribe(this);
  }

  next(value: Lesson[]): void {
    console.log('EventBusLessonsListComponent component received data ..');
    this.lessons = value;
  }

  error(err: any): void {
    console.error(err);
  }

  complete(): void {
    console.log('completed');
  }

  select(lesson: Lesson) {
    this.selected.emit(lesson);
  }
}
