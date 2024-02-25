import { Component, Input } from '@angular/core';
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

@Component({
  selector: 'quality-scale',
  templateUrl: './quality-scale.component.html',
  styleUrl: './quality-scale.component.scss',
})
export class QualityScaleComponent {
  @Input() value: EvaluationRange;
}
