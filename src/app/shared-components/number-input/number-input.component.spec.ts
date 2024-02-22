import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputComponent } from './number-input.component';
import { FormsModule } from '@angular/forms';

describe('NumberInputComponent', () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberInputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    component.configuration = {
      Label: 'Japanese Green Tea',
      Placeholder: 'e.g. Gyokuro',
    };
    fixture.detectChanges();
  });

  it("should create 'NumberInputComponent'", () => {
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
      const EXAMPLE: number = 2018;
      component.input = EXAMPLE;

      component.onInput();

      expect(component.userInput.emit).toHaveBeenCalledWith(EXAMPLE);
    });
  });
});
