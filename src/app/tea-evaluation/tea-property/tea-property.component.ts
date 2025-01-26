import { Component, Input } from '@angular/core';

// models
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

@Component({
    selector: 'tea-property',
    templateUrl: './tea-property.component.html',
    styleUrl: './tea-property.component.scss',
    standalone: false
})
export class TeaPropertyComponent {
  @Input() title: string;
  @Input() values: Array<EvaluationRange>;
  @Input() legend: Array<string>;
}
