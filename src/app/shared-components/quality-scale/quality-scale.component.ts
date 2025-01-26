import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

@Component({
    selector: 'quality-scale',
    templateUrl: './quality-scale.component.html',
    styleUrl: './quality-scale.component.scss',
    standalone: false
})
export class QualityScaleComponent implements OnInit, OnChanges {
  @Input() value: EvaluationRange;

  widthOverlay: number;

  ngOnInit(): void {
    this.widthOverlay = this.getPercentage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['value'] &&
      changes['value'].currentValue != changes['value'].previousValue
    ) {
      this.value = changes['value'].currentValue;
      this.widthOverlay = this.getPercentage();
    }
  }

  private getPercentage(): number {
    return 100 - (100 / 7) * this.value;
  }
}
