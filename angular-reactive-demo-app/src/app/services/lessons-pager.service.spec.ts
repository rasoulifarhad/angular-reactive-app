import { TestBed } from '@angular/core/testing';

import { LessonsPagerService } from './lessons-pager.service';

describe('LessonsPagerService', () => {
  let service: LessonsPagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonsPagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
