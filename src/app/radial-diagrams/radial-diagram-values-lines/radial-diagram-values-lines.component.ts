import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';
import { GeometryService } from '../diagram-services/geometry.service';

@Component({
  selector: 'radial-diagram-values-lines',
  templateUrl: './radial-diagram-values-lines.component.html',
  styleUrl: './radial-diagram-values-lines.component.scss',
})
export class RadialDiagramValuesLinesComponent implements OnInit, OnChanges {
  @Input() size: number;
  @Input() values: Array<EvaluationRange>;

  constructor(private geometryService: GeometryService) {}

  xOnRadialLine: Array<number>;
  yOnRadialLine: Array<number>;

  ngOnInit(): void {
    this.setPointsOnRadialLines();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ?? changes on 'size'
    if (
      changes &&
      changes['size'].currentValue != changes['size'].previousValue
    ) {
      this.setPointsOnRadialLines();
    }

    // ?? changes on 'values'
    if (
      changes &&
      changes['values'].currentValue != changes['values'].previousValue
    ) {
      this.setPointsOnRadialLines();
    }
  }

  private setPointsOnRadialLines(): void {
    const CENTER: number = Math.floor(this.size / 2); // ?? 1px offset so all lines are drawn appropiately
    const STEP_SIZE: number = Math.floor(360 / this.values.length);
    let angle: number = 0;
    let radius: number;
    this.xOnRadialLine = [];
    this.yOnRadialLine = [];

    for (let i: number = 0; i < this.values.length; i++) {
      radius = this.values[i] * STEP_SIZE;
      this.xOnRadialLine.push(
        this.geometryService.getXOnRadialLine(CENTER, radius, angle)
      );
      this.yOnRadialLine.push(
        this.geometryService.getYOnRadialLine(CENTER, radius, angle)
      );
      angle += STEP_SIZE;
    }
  } // sets 'xOnRadialLine' and 'yOnRadialLine' with x- and y-coordinates
}
