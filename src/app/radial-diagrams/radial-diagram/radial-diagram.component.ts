import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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
    this.getSize();
  }

  @HostListener('window:resize')
  private getSize(): void {
    const PADDING_X_AXIS: number = 32; // ?? padding-left + padding-right
    this.size = this.host.nativeElement.offsetWidth - PADDING_X_AXIS;
    this.offsetValues = this.size * -1 - 1;
  } // returns the size of svg cosidering surrounding spacing
}
