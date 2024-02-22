import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputComponent } from './text-input.component';
import { FormsModule } from '@angular/forms';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    component.configuration = {
      Label: 'Japanese Green Tea',
      Placeholder: 'e.g. Gyokuro',
    };
    fixture.detectChanges();
  });

  it("should create 'TextInputComponent'", () => {
    expect(component).toBeTruthy();
  });

  describe('onInput', () => {
    beforeEach(() => {
      spyOn(component.userInput, 'emit');
    });

    it("should call 'emit.userInput' 1-times", () => {
      component.onInput();

      expect(component.userInput.emit).toHaveBeenCalledTimes(1);
    });

    it("should call 'emit.userInput' with example text", () => {
      const EXAMPLE: string = 'Gyokuro';
      component.input = EXAMPLE;

      component.onInput();

      expect(component.userInput.emit).toHaveBeenCalledWith(EXAMPLE);
    });
  });
});
