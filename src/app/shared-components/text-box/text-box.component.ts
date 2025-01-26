import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { InputFieldBaseModel } from 'src/app/shared-component-models/input-fields.model';

@Component({
    selector: 'text-box',
    templateUrl: './text-box.component.html',
    styleUrl: './text-box.component.scss',
    standalone: false
})
export class TextBoxComponent {
  @Input() configuration: InputFieldBaseModel;
  @Output() userInput: EventEmitter<string> = new EventEmitter<string>();

  input: string = '';

  onInput(): void {
    this.userInput.emit(this.input);
  } // emits user input
}
