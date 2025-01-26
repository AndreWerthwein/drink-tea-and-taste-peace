import { Component, Input, SimpleChanges } from '@angular/core';

// models
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

// services
import { GeometryService } from '../diagram-services/geometry.service';

// data
import * as diagram from '../radial-diagram/radial-diagram.data';
import {
  DiagramWedgeConnectingLinesModel,
  DiagramWedgeModel,
} from './radia-diagram-values-area.model';

@Component({
    selector: 'radial-diagram-values-area',
    templateUrl: './radial-diagram-values-area.component.html',
    styleUrl: './radial-diagram-values-area.component.scss',
    standalone: false
})
export class RadialDiagramValuesAreaComponent {
  @Input() size: number;
  @Input() values: Array<EvaluationRange>;

  wedgesBackground: Array<DiagramWedgeModel>;
  wedgesOutline: Array<DiagramWedgeModel>;
  connectingLines: Array<DiagramWedgeConnectingLinesModel>;

  constructor(private geometryService: GeometryService) {}

  ngOnInit(): void {
    this.drawDiagram();
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
        this.drawDiagram();
      }, 500); // ?? timeout necessary to prevent performance issues due to too many recalculations
    }

    // ?? changes on 'values'
    if (
      changes['values'] &&
      changes['values'].currentValue != changes['values'].previousValue
    ) {
      this.values = changes['values'].currentValue;
      this.drawDiagram();
    }
  }

  setWedgesBackground(): void {
    const STEP_DEGREE: number = 360 / this.values.length;
    const STEP_RADIUS: number =
      (this.size - diagram.PADDING) / diagram.MAXIMUM_VALUE / 2;
    const STEP_PERCENTAGE: number = (STEP_DEGREE / 360) * 100;
    this.wedgesBackground = [];
    let rotation: number = -90;

    for (let i: number = 0; i < this.values.length; i++) {
      let wedge: DiagramWedgeModel = new DiagramWedgeModel();
      wedge.Radius = (this.values[i] * STEP_RADIUS) / 2;
      wedge.Circumference = this.geometryService.getCircumference(wedge.Radius);
      wedge.DashArray =
        (STEP_PERCENTAGE * wedge.Circumference) / 100 +
        ' ' +
        wedge.Circumference;
      wedge.Angle = rotation;

      this.wedgesBackground.push(wedge);
      rotation += STEP_DEGREE;
    }
  }

  setWedgesOutline(): void {
    const STEP_DEGREE: number = 360 / this.values.length;
    const STEP_RADIUS: number =
      (this.size - diagram.PADDING) / diagram.MAXIMUM_VALUE;
    const STEP_PERCENTAGE: number = (STEP_DEGREE / 360) * 100;
    this.wedgesOutline = [];
    let rotation: number = -90;

    for (let i: number = 0; i < this.values.length; i++) {
      let wedge: DiagramWedgeModel = new DiagramWedgeModel();
      wedge.Radius = (this.values[i] * STEP_RADIUS) / 2;
      wedge.Circumference = this.geometryService.getCircumference(wedge.Radius);
      wedge.DashArray =
        (STEP_PERCENTAGE * wedge.Circumference) / 100 +
        ' ' +
        wedge.Circumference;
      wedge.Angle = rotation;

      this.wedgesOutline.push(wedge);
      rotation += STEP_DEGREE;
    }
  }

  setConnectingLines(): void {
    const CENTER: number = this.size / 2; // ?? 1px offset so all lines are drawn appropiately
    const STEP_DEGREE: number = 360 / this.values.length;
    const STEP_RADIUS: number =
      (this.size - diagram.PADDING) / diagram.MAXIMUM_VALUE / 2;
    let angle: number = STEP_DEGREE;
    let radiusFirst: number = 0;
    let radiusSecond: number = 0;
    this.connectingLines = [];

    for (let i: number = 0; i < this.values.length; i++) {
      let line: DiagramWedgeConnectingLinesModel =
        new DiagramWedgeConnectingLinesModel();
      if (i === this.values.length - 1) {
        radiusFirst = this.values[i] * STEP_RADIUS;
        radiusSecond = this.values[0] * STEP_RADIUS;
      } else {
        radiusFirst = this.values[i] * STEP_RADIUS;
        radiusSecond = this.values[i + 1] * STEP_RADIUS;
      }

      line.X1 = this.geometryService.getXOnRadialLine(
        CENTER,
        radiusFirst,
        angle
      );
      line.Y1 = this.geometryService.getYOnRadialLine(
        CENTER,
        radiusFirst,
        angle
      );
      line.X2 = this.geometryService.getXOnRadialLine(
        CENTER,
        radiusSecond,
        angle
      );
      line.Y2 = this.geometryService.getYOnRadialLine(
        CENTER,
        radiusSecond,
        angle
      );

      angle += STEP_DEGREE;
      this.connectingLines.push(line);
    }
  }

  drawDiagram(): void {
    this.setWedgesBackground();
    this.setWedgesOutline();
    this.setConnectingLines();
  }
}
