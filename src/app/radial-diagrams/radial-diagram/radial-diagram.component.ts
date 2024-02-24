import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'radial-diagram',
  templateUrl: './radial-diagram.component.html',
  styleUrl: './radial-diagram.component.scss',
})
export class RadialDiagramComponent implements OnInit {
  size: number;

  constructor(private host: ElementRef) {}

  ngOnInit(): void {
    this.getSize();
  }

  @HostListener('window:resize')
  private getSize(): void {
    const PADDING_X_AXIS: number = 32; // ?? padding-left + padding-right
    this.size = this.host.nativeElement.offsetWidth - PADDING_X_AXIS;
  } // returns the size of svg cosidering surrounding spacing
}
