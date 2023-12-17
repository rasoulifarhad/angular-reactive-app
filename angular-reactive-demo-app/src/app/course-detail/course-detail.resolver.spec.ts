import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { courseDetailResolver } from './course-detail.resolver';

describe('courseDetailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => courseDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
