import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { InputFieldBaseModel } from 'src/app/shared-component-models/input-fields.model';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  @Input() configuration: InputFieldBaseModel;
  @Output() userInput: EventEmitter<string> = new EventEmitter<string>();

  input: string = '';

  onInput(): void {
    this.userInput.emit(this.input);
  } // emits user input
}
