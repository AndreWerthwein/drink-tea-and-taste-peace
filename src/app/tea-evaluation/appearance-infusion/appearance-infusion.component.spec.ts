import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceInfusionComponent } from './appearance-infusion.component';

describe('AppearanceInfusionComponent', () => {
  let component: AppearanceInfusionComponent;
  let fixture: ComponentFixture<AppearanceInfusionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppearanceInfusionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppearanceInfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create 'AppearanceInfusionComponent'", () => {
    expect(component).toBeTruthy();
  });
});
