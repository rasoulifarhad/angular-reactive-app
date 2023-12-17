import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBusExperimentsComponent } from './event-bus-experiments.component';

describe('EventBusExperimentsComponent', () => {
  let component: EventBusExperimentsComponent;
  let fixture: ComponentFixture<EventBusExperimentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventBusExperimentsComponent]
    });
    fixture = TestBed.createComponent(EventBusExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
