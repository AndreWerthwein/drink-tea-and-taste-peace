import { Component, Input } from '@angular/core';

// models
import { FullEvaluationModel } from 'src/app/shared-data-models/evaluation-full.model';
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

// data
import * as LegendData from '../../shared-data/legend-tea-properties.data';

@Component({
    selector: 'evaluation-full',
    templateUrl: './evaluation-full.component.html',
    styleUrl: './evaluation-full.component.scss',
    standalone: false
})
export class EvaluationFullComponent {
  @Input() data: FullEvaluationModel;

  // ?? making legend data public to template
  readonly legendData: typeof LegendData = LegendData;

  getArrayOfObject(input: Object): Array<EvaluationRange> {
    return Object.values(input);
  }
}
