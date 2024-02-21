import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Output() userInput: EventEmitter<string> = new EventEmitter<string>();

  input: string = '';

  onInput(): void {
    this.userInput.emit(this.input);
  } // emits user input
}
