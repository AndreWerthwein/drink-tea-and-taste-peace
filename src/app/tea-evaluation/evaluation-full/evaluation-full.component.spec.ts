import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationFullComponent } from './evaluation-full.component';

describe('EvaluationFullComponent', () => {
  let component: EvaluationFullComponent;
  let fixture: ComponentFixture<EvaluationFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvaluationFullComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EvaluationFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
