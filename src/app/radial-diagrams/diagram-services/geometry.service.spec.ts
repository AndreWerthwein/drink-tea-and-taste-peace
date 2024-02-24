import { TestBed } from '@angular/core/testing';

import { GeometryService } from './geometry.service';

describe('GeometryService', () => {
  let service: GeometryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeometryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getXOnRadialLine', () => {
    it("should call 'Math.cos' 1-times", () => {
      spyOn(Math, 'cos');

      service.getXOnRadialLine(1, 1, 1);

      expect(Math.cos).toHaveBeenCalledTimes(1);
    });
  });

  describe('getYOnRadialLine', () => {
    it("should call 'Math.sin' 1-times", () => {
      spyOn(Math, 'sin');

      service.getYOnRadialLine(1, 1, 1);

      expect(Math.sin).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCircumference', () => {
    it("should return 'Math.PI' for a radius of '0.5'", () => {
      let expectedResult: number = Math.PI;

      let result: number = service.getCircumference(0.5);

      expect(result).toEqual(expectedResult);
    });
  });
});
