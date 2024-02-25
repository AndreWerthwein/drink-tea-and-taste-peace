import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceLeavesComponent } from './appearance-leaves.component';

describe('AppearanceLeavesComponent', () => {
  let component: AppearanceLeavesComponent;
  let fixture: ComponentFixture<AppearanceLeavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppearanceLeavesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppearanceLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create 'AppearanceLeavesComponent'", () => {
    expect(component).toBeTruthy();
  });
});
