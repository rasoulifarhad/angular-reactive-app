import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBusLessonsListComponent } from './event-bus-lessons-list.component';

describe('EventBusLessonsListComponent', () => {
  let component: EventBusLessonsListComponent;
  let fixture: ComponentFixture<EventBusLessonsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventBusLessonsListComponent]
    });
    fixture = TestBed.createComponent(EventBusLessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
