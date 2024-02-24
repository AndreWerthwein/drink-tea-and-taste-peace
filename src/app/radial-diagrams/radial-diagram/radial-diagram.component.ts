import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

// models
import { EvaluationRange } from 'src/app/shared-types/evaluation.types';

@Component({
  selector: 'radial-diagram',
  templateUrl: './radial-diagram.component.html',
  styleUrl: './radial-diagram.component.scss',
})
export class RadialDiagramComponent implements OnInit {
  size: number;
  offsetValues: number;
  test: Array<EvaluationRange> = [1, 2, 3, 4, 5, 6, 7, 6, 7, 5];

  constructor(private host: ElementRef) {}

  ngOnInit(): void {
    this.getSizeAndOffset();
  }

  private getSmallerSize(): number {
    let hostElement: HTMLElement = this.host.nativeElement;
    return Math.min(hostElement.offsetWidth, hostElement.offsetHeight);
  } // returns either 'width' or 'height' of viewport, which ever is smaller

  @HostListener('window:resize')
  private getSizeAndOffset(): void {
    this.size = this.getSmallerSize();
    this.offsetValues = this.size * -1 - 1;
  } // returns the size of svg cosidering surrounding spacing
}
