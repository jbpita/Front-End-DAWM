import { TestBed } from '@angular/core/testing';

import { ChechLoginGuard } from './chech-login.guard';

describe('ChechLoginGuard', () => {
  let guard: ChechLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChechLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
