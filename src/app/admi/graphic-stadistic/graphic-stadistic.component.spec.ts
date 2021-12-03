import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicStadisticComponent } from './graphic-stadistic.component';

describe('GraphicStadisticComponent', () => {
  let component: GraphicStadisticComponent;
  let fixture: ComponentFixture<GraphicStadisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicStadisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicStadisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
