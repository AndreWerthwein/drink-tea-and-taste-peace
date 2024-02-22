import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxComponent } from './text-box.component';
import { FormsModule } from '@angular/forms';

describe('TextBoxComponent', () => {
  let component: TextBoxComponent;
  let fixture: ComponentFixture<TextBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextBoxComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TextBoxComponent);
    component = fixture.componentInstance;
    component.configuration = {
      Label: 'Japanese Green Tea',
      Placeholder: 'e.g. Gyokuro',
    };
    fixture.detectChanges();
  });

  it("should create 'TextBoxComponent'", () => {
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
