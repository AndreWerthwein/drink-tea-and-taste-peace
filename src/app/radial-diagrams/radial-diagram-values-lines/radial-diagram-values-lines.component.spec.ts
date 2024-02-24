import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialDiagramValuesLinesComponent } from './radial-diagram-values-lines.component';

describe('RadialDiagramValuesLinesComponent', () => {
  let component: RadialDiagramValuesLinesComponent;
  let fixture: ComponentFixture<RadialDiagramValuesLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadialDiagramValuesLinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadialDiagramValuesLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
