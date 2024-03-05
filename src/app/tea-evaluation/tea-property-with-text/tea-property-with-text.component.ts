import { Component, Input } from '@angular/core';

// models
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

@Component({
  selector: 'tea-property-with-text',
  templateUrl: './tea-property-with-text.component.html',
  styleUrl: './tea-property-with-text.component.scss',
})
export class TeaPropertyWithTextComponent {
  @Input() title: string;
  @Input() values: Array<EvaluationRange>;
  @Input() legend: Array<string>;
  @Input() text?: Array<string>;
}
