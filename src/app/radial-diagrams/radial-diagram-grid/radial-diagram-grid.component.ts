import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

// services
import { GeometryService } from '../diagram-services/geometry.service';

@Component({
  selector: 'radial-diagram-grid',
  templateUrl: './radial-diagram-grid.component.html',
  styleUrl: './radial-diagram-grid.component.scss',
})
export class RadialDiagramGridComponent implements OnInit {
  @Input() numberOfValues: number; // ?? dictates number of segments

  size: number;
  radialLines: Array<number>;
  xOnRadialLine: Array<number>;
  yOnRadialLine: Array<number>;

  constructor(
    private geometryService: GeometryService,
    private host: ElementRef
  ) {}

  ngOnInit(): void {
    this.drawDiagramGrid();
  }

  @HostListener('window:resize')
  onResizeDiagram(): void {
    // todo: create loader-overlay to bridge re-calculation / timeout
    // ?? setting a timeout of 1s to prevent an overload of re-calculations
    setTimeout(() => {
      this.drawDiagramGrid();
    }, 1500);
  }

  private getSize(): number {
    const PADDING_X_AXIS: number = 32; // ?? padding-left + padding-right
    return this.host.nativeElement.offsetWidth - PADDING_X_AXIS;
  } // returns the size of svg cosidering surrounding spacing

  private getRadialLines(size: number): Array<number> {
    // ?? corresponding to the highest value of the 'EvaluationRange'
    const MAXIMUM_NUMBER_OF_VALUES: number = 7;
    const MAXIMUM_RADIUS: number = Math.floor((size - 1) / 2); // ?? 1px offset so all lines are drawn appropiately
    const STEP_SIZE: number = Math.floor(
      MAXIMUM_RADIUS / MAXIMUM_NUMBER_OF_VALUES
    );
    let radialLines: Array<number> = [];
    let sum: number = MAXIMUM_RADIUS;

    for (let i: number = 0; i < MAXIMUM_NUMBER_OF_VALUES; i++) {
      radialLines.push(sum);
      sum -= STEP_SIZE;
    }

    return radialLines;
  } // returns an array of sizes for the radial grid lines

  private setPointsOnRadialLines(size: number): void {
    const CENTER: number = Math.floor(size / 2); // ?? 1px offset so all lines are drawn appropiately
    const RADIUS: number = Math.floor((size - 1) / 2); // ?? 1px offset so all lines are drawn appropiately
    const STEP_SIZE: number = Math.floor(360 / this.numberOfValues);
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
      angle += STEP_SIZE;
    }
  } // sets 'xOnRadialLine' and 'yOnRadialLine' with x- and y-coordinates

  private drawDiagramGrid(): void {
    this.size = this.getSize();
    this.radialLines = this.getRadialLines(this.size);
    this.setPointsOnRadialLines(this.size);
  } // collects all necessary methods needed to draw the diagram grid
}
