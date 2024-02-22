import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTertiaryComponent } from './button-tertiary.component';

describe('ButtonTertiaryComponent', () => {
  let component: ButtonTertiaryComponent;
  let fixture: ComponentFixture<ButtonTertiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonTertiaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonTertiaryComponent);
    component = fixture.componentInstance;
    component.configuration = {
      Label: 'Gyokuro',
      Tooltip: 'Jade Dew',
    };
    fixture.detectChanges();
  });

  it("should create 'ButtonTertiaryComponent'", () => {
    expect(component).toBeTruthy();
  });

  describe('onClick', () => {
    beforeEach(() => {
      spyOn(component.clicked, 'emit');
    });

    it("should call 'emit.clicked' 1-times", () => {
      component.onClick();

      expect(component.clicked.emit).toHaveBeenCalledTimes(1);
    });

    it("should call 'emit.clicked' with 'true'", () => {
      component.onClick();

      expect(component.clicked.emit).toHaveBeenCalledWith(true);
    });
  });
});
