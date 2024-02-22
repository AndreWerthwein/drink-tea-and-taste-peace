import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSecondaryComponent } from './button-secondary.component';

describe('ButtonSecondaryComponent', () => {
  let component: ButtonSecondaryComponent;
  let fixture: ComponentFixture<ButtonSecondaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSecondaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonSecondaryComponent);
    component = fixture.componentInstance;
    component.configuration = {
      Label: 'Gyokuro',
      Tooltip: 'Jade Dew',
    };
    fixture.detectChanges();
  });

  it("should create 'ButtonSecondaryComponent'", () => {
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
