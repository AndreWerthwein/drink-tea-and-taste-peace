import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialDiagramComponent } from './radial-diagram.component';
import { RadialDiagramsModule } from '../radial-diagrams.module';

describe('RadialDiagramComponent', () => {
  let component: RadialDiagramComponent;
  let fixture: ComponentFixture<RadialDiagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialDiagramComponent],
      imports: [RadialDiagramsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RadialDiagramComponent);
    component = fixture.componentInstance;
    component.type = 'AREA';
    component.values = [];
    fixture.detectChanges();
  });

  it("should create 'RadialDiagramComponent'", () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    // it("should call 'type' with value 'undefined' to 'AREA'", () => {
    //   component.type = undefined;
    //   let expectedResult: string = 'AREA';

    //   component.ngOnInit();

    //   expect(component.type).toEqual(expectedResult);
    // });

    it("should call 'getSizeAndOffset' 1-times", () => {
      spyOn<any>(component, 'getSizeAndOffset');

      component.ngOnInit();

      expect(component['getSizeAndOffset']).toHaveBeenCalledTimes(1);
    });
  });

  describe('getSmallerSize', () => {
    it("should call 'Math.min' 1-times", () => {
      spyOn(Math, 'min');

      component['getSmallerSize']();

      expect(Math.min).toHaveBeenCalledTimes(1);
    });
  });

  describe('getSizeAndOffset', () => {
    it("should call 'getSmallerSize' 1-times", () => {
      spyOn<any>(component, 'getSmallerSize');

      component['getSizeAndOffset']();

      expect(component['getSmallerSize']).toHaveBeenCalledTimes(1);
    });
  });
});
