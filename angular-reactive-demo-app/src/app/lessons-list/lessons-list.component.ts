import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css'],
})
export class LessonsListComponent {
  @Input() lessons: Lesson[] | null = null;

  @Output() selected = new EventEmitter<Lesson>();

  select(lesson: Lesson) {
    this.selected.emit(lesson);
  }
}
