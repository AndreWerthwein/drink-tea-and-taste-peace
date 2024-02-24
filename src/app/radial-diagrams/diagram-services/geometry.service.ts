import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeometryService {
  constructor() {}

  getXOnRadialLine(center: number, radius: number, angle: number): number {
    return center + radius * Math.cos((angle - 90) * (Math.PI / 180));
  } // returns a x-coordinate of a point on a radial line based on a given angle

  getYOnRadialLine(center: number, radius: number, angle: number): number {
    return center + radius * Math.sin((angle - 90) * (Math.PI / 180));
  } // returns a y-coordinate of a point on a radial line based on a given angle

  getCircumference(radius: number): number {
    return 2 * Math.PI * radius;
  } // returns the circumeference of a circle with a given radius
}
