import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrimaryComponent } from './button-primary.component';

describe('ButtonPrimaryComponent', () => {
  let component: ButtonPrimaryComponent;
  let fixture: ComponentFixture<ButtonPrimaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPrimaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonPrimaryComponent);
    component = fixture.componentInstance;
    component.configuration = {
      Label: 'Gyokuro',
      Tooltip: 'Jade Dew',
    };
    fixture.detectChanges();
  });

  it("should create 'ButtonPrimaryComponent'", () => {
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
