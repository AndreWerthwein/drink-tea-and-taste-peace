import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

// models
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

@Component({
    selector: 'radial-diagram',
    templateUrl: './radial-diagram.component.html',
    styleUrl: './radial-diagram.component.scss',
    standalone: false
})
export class RadialDiagramComponent implements OnInit {
  @Input() type: 'LINES' | 'POLYGON' | 'AREA' | undefined;
  @Input() values: Array<EvaluationRange>;

  size: number;
  offsetValues: number;

  constructor(private host: ElementRef) {}

  ngOnInit(): void {
    if (!this.type) this.type = 'AREA';
    this.getSizeAndOffset();
  }

  private getSmallerSize(): number {
    let hostElement: HTMLElement = this.host.nativeElement;
    return Math.min(hostElement.offsetWidth, hostElement.offsetHeight);
  } // returns either 'width' or 'height' of viewport, which ever is smaller

  // todo: @HostListener('window:resize')
  private getSizeAndOffset(): void {
    this.size = this.getSmallerSize();
    this.offsetValues = this.size * -1 - 1;
  } // returns the size of svg cosidering surrounding spacing
}
