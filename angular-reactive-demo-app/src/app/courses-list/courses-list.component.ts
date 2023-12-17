import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../shared/model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] | null = null;

  ngOnInit(): void {
    console.log('CoursesListComponent inited...');

  }
}
