import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBoxComponent } from './select-box.component';
import { FormsModule } from '@angular/forms';

describe('SelectBoxComponent', () => {
  let component: SelectBoxComponent;
  let fixture: ComponentFixture<SelectBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectBoxComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(SelectBoxComponent);
    component = fixture.componentInstance;
    component.label = 'Japanese Green Tea';
    component.options = ['Gyokuro', 'Fukumushicha'];
    fixture.detectChanges();
  });

  it("should create 'SelectBoxComponent'", () => {
    expect(component).toBeTruthy();
  });

  describe('onSelect', () => {
    beforeEach(() => {
      spyOn(component.selected, 'emit');
    });

    it("should call 'emit.selected' 1-times", () => {
      component.onSelect();

      expect(component.selected.emit).toHaveBeenCalledTimes(1);
    });

    it("should call 'emit.selected' with example text", () => {
      const EXAMPLE: string = 'Gyokuro';
      component.selection = EXAMPLE;

      component.onSelect();

      expect(component.selected.emit).toHaveBeenCalledWith(EXAMPLE);
    });
  });
});
