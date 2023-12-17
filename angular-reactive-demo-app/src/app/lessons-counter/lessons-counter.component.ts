import { Component, OnInit } from '@angular/core';
import { store } from '../event-bus-experiments/app-data';
import { Observable, Observer } from 'rxjs';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css'],
})
export class LessonsCounterComponent implements OnInit, Observer<Lesson[]> {
  lessonsCounter = 0;

  ngOnInit(): void {
    console.log('lesson list component is registered as observer ..');

    store.lessonsList$.subscribe(this);
  }


  next(value: Lesson[]):void {
    console.log('counter component received data ..');
    this.lessonsCounter = value.length;
  }

  error(err: any): void {
    console.error(err);
  }

  complete(): void{
    console.log('completed');
  }
}
