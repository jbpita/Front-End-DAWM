import { TestBed } from '@angular/core/testing';

import { CompraProductosService } from './compra-productos.service';

describe('CompraProductosService', () => {
  let service: CompraProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
