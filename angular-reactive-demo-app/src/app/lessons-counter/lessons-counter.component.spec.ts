import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsCounterComponent } from './lessons-counter.component';

describe('LessonsCounterComponent', () => {
  let component: LessonsCounterComponent;
  let fixture: ComponentFixture<LessonsCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonsCounterComponent]
    });
    fixture = TestBed.createComponent(LessonsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
