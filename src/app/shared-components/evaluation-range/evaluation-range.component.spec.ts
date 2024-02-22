import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationRangeComponent } from './evaluation-range.component';
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';
import { FormsModule } from '@angular/forms';

describe('EvaluationRangeComponent', () => {
  let component: EvaluationRangeComponent;
  let fixture: ComponentFixture<EvaluationRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationRangeComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EvaluationRangeComponent);
    component = fixture.componentInstance;
    component.label = 'Japanese Green Tea';
    fixture.detectChanges();
  });

  it("should create 'EvaluationRangeComponent'", () => {
    expect(component).toBeTruthy();
  });

  describe('onSelect', () => {
    beforeEach(() => {
      spyOn(component.selected, 'emit');
    });

    it("should call 'emit.selected' 1-times", () => {
      component.onSelect();

      expect(component.selected.emit).toHaveBeenCalledTimes(1);
    });

    it("should call 'emit.selected' with example text", () => {
      const EXAMPLE: EvaluationRange = 5;
      component.selection = EXAMPLE;

      component.onSelect();

      expect(component.selected.emit).toHaveBeenCalledWith(EXAMPLE);
    });
  });
});
