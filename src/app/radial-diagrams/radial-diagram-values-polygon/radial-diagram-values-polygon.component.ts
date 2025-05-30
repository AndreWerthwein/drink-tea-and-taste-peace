import { Component, Input, SimpleChanges } from '@angular/core';

// models
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

// services
import { GeometryService } from '../diagram-services/geometry.service';

// data
import * as diagram from '../radial-diagram/radial-diagram.data';

@Component({
    selector: 'radial-diagram-values-polygon',
    templateUrl: './radial-diagram-values-polygon.component.html',
    styleUrl: './radial-diagram-values-polygon.component.scss',
    standalone: false
})
export class RadialDiagramValuesPolygonComponent {
  @Input() size: number;
  @Input() values: Array<EvaluationRange>;

  constructor(private geometryService: GeometryService) {}

  polygonPoints: string = '';

  ngOnInit(): void {
    this.setPointsOnRadialLines();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ?? changes on 'size'
    if (
      changes['size'] &&
      changes['size'].currentValue != changes['size'].previousValue
    ) {
      this.size = changes['size'].currentValue;

      // todo: add loader to bridge time between recalculations
      setTimeout(() => {
        this.setPointsOnRadialLines();
      }, 500); // ?? timeout necessary to prevent performance issues due to too many recalculations
    }

    // ?? changes on 'values'
    if (
      changes['values'] &&
      changes['values'].currentValue != changes['values'].previousValue
    ) {
      this.values = changes['values'].currentValue;
      this.setPointsOnRadialLines();
    }
  }

  private setPointsOnRadialLines(): void {
    const CENTER: number = this.size / 2; // ?? 1px offset so all lines are drawn appropiately
    const STEP_DEGREE: number = 360 / this.values.length;
    const STEP_RADIUS: number =
      (this.size - diagram.PADDING) / diagram.MAXIMUM_VALUE / 2;
    let angle: number = 0;
    let radius: number;
    this.polygonPoints = '';

    for (let i: number = 0; i < this.values.length; i++) {
      radius = this.values[i] * STEP_RADIUS;

      this.polygonPoints +=
        this.geometryService.getXOnRadialLine(CENTER, radius, angle) +
        ',' +
        this.geometryService.getYOnRadialLine(CENTER, radius, angle) +
        ' ';

      angle += STEP_DEGREE;
    }
  } // sets 'xOnRadialLine' and 'yOnRadialLine' with x- and y-coordinates
}
