import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonComponent } from './icon-button.component';
import { MatIconModule } from '@angular/material/icon';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconButtonComponent],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    component.configuration = {
      Icon: 'delete',
      Tooltip: 'Delete item',
    };
    fixture.detectChanges();
  });

  it("should create 'IconButtonComponent'", () => {
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
