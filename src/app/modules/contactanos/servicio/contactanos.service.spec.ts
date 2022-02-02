import { TestBed } from '@angular/core/testing';

import { ContactanosService } from './contactanos.service';

describe('ContactanosService', () => {
  let service: ContactanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactanosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
