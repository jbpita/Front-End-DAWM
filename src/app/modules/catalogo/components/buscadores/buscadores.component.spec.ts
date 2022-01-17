import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadoresComponent } from './buscadores.component';

describe('BuscadoresComponent', () => {
  let component: BuscadoresComponent;
  let fixture: ComponentFixture<BuscadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
