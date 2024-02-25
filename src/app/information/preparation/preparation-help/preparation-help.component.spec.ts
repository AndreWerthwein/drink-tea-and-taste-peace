import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationHelpComponent } from './preparation-help.component';

describe('PreparationHelpComponent', () => {
  let component: PreparationHelpComponent;
  let fixture: ComponentFixture<PreparationHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreparationHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreparationHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
