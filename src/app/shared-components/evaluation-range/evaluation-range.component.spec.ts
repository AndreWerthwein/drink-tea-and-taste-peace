import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationRangeComponent } from './evaluation-range.component';

describe('EvaluationRangeComponent', () => {
  let component: EvaluationRangeComponent;
  let fixture: ComponentFixture<EvaluationRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluationRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});