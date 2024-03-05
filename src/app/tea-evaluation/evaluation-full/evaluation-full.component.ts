import { Component, Input, OnInit } from '@angular/core';
import { FullEvaluationModel } from 'src/app/shared-data-models/evaluation-full.model';
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

@Component({
  selector: 'evaluation-full',
  templateUrl: './evaluation-full.component.html',
  styleUrl: './evaluation-full.component.scss',
})
export class EvaluationFullComponent {
  @Input() data: FullEvaluationModel;

  getArrayOfObject(input: Object): Array<EvaluationRange> {
    return Object.values(input);
  }
}
