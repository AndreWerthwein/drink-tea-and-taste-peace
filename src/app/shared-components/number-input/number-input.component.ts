import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { InputFieldBaseModel } from 'src/app/shared-component-models/input-fields.model';

@Component({
    selector: 'number-input',
    templateUrl: './number-input.component.html',
    styleUrl: './number-input.component.scss',
    standalone: false
})
export class NumberInputComponent {
  @Input() configuration: InputFieldBaseModel;
  @Output() userInput: EventEmitter<number> = new EventEmitter<number>();

  input: number = 0;

  onInput(): void {
    // todo: validate for reasonable values and omit other values, such negative values, etc.
    this.userInput.emit(this.input);
  } // emits user input
}
