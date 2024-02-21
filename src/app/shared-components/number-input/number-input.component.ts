import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
})
export class NumberInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Output() userInput: EventEmitter<number> = new EventEmitter<number>();

  input: number = 0;

  onInput(): void {
    // todo: validate for reasonable values and omit other values, such negative values, etc.
    this.userInput.emit(this.input);
  } // emits user input
}
