import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

// services
import { GeometryService } from '../diagram-services/geometry.service';

// data
import * as diagram from '../radial-diagram/radial-diagram.data';

@Component({
  selector: 'radial-diagram-grid',
  templateUrl: './radial-diagram-grid.component.html',
  styleUrl: './radial-diagram-grid.component.scss',
})
export class RadialDiagramGridComponent implements OnInit, OnChanges {
  @Input() numberOfValues: number; // ?? dictates number of segments
  @Input() size: number;

  circles: Array<number>;
  xOnRadialLine: Array<number>;
  yOnRadialLine: Array<number>;
  PADDING_OFFSET: number = 32;
  constructor(private geometryService: GeometryService) {}

  ngOnInit(): void {
    this.drawDiagramGrid();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes &&
      changes['size'].currentValue != changes['size'].previousValue
    ) {
      this.size = changes['size'].currentValue;
      this.drawDiagramGrid();
    }
  }

  private getCircularBorders(size: number): Array<number> {
    const MAXIMUM_RADIUS: number = (size - diagram.PADDING) / 2; // ?? 1px offset so all lines are drawn appropiately
    const STEP_SIZE: number = MAXIMUM_RADIUS / diagram.MAXIMUM_VALUE;
    let circleSizes: Array<number> = [];
    let sum: number = MAXIMUM_RADIUS;

    for (let i: number = 0; i < diagram.MAXIMUM_VALUE; i++) {
      circleSizes.push(sum);
      sum -= STEP_SIZE;
    }

    return circleSizes;
  } // returns an array of sizes for the radial grid lines

  private setPointsOnCircles(size: number): void {
    const CENTER: number = size / 2;
    const RADIUS: number = (size - diagram.PADDING) / 2;
    const STEP_DEGREES: number = 360 / this.numberOfValues;
    let angle: number = 0;
    this.xOnRadialLine = [];
    this.yOnRadialLine = [];

    for (let i: number = 0; i < this.numberOfValues; i++) {
      this.xOnRadialLine.push(
        this.geometryService.getXOnRadialLine(CENTER, RADIUS, angle)
      );
      this.yOnRadialLine.push(
        this.geometryService.getYOnRadialLine(CENTER, RADIUS, angle)
      );
      angle += STEP_DEGREES;
    }
  } // sets 'xOnRadialLine' and 'yOnRadialLine' with x- and y-coordinates

  private drawDiagramGrid(): void {
    this.circles = this.getCircularBorders(this.size);
    this.setPointsOnCircles(this.size);
  } // collects all necessary methods needed to draw the diagram grid
}
