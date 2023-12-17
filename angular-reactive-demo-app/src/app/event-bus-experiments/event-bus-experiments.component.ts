import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { store } from './app-data';
import { testLessons } from '../shared/model/test-lessons';

@Component({
  selector: 'app-event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {


  ngOnInit(): void {
    console.log('Top level component broadcasted all lessons ...');

    store.initializeLessonsList(testLessons.slice(0));

    setTimeout(() => {
      var i: number = 1;
      const newLesson: Lesson = {
        id: Math.random().toString(),
        description: 'New lesson arriving from the backend',
        seqNo: i++,
        duration: '5:00',
        completed: false,
      };
      store.addLesson(newLesson);
    }, 10000);
  }

  addLesson(lessonText: string) {
    const newLesson: Lesson = {
      id: Math.random().toString(),
      description: lessonText,
      seqNo: 1,
      duration: '5:00',
      completed: false
    };
    store.addLesson(newLesson);
  }
}
