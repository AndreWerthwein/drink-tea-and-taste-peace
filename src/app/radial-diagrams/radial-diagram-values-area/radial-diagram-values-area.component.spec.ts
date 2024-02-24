import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialDiagramValuesAreaComponent } from './radial-diagram-values-area.component';

describe('RadialDiagramValuesAreaComponent', () => {
  let component: RadialDiagramValuesAreaComponent;
  let fixture: ComponentFixture<RadialDiagramValuesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadialDiagramValuesAreaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadialDiagramValuesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
