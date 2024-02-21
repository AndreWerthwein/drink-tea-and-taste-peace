import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'evaluation-range',
  templateUrl: './evaluation-range.component.html',
  styleUrl: './evaluation-range.component.scss',
})
export class EvaluationRangeComponent {
  @Input() label: string = '';
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();

  selection: number = 0;

  onSelect(): void {
    this.selected.emit(this.selection);
  } // emits selected value
}
