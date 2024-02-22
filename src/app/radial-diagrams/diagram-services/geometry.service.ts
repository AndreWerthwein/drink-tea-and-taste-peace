import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeometryService {
  constructor() {}

  getXOnRadialLine(center: number, radius: number, angle: number): number {
    let x: number = center + radius * Math.cos((angle - 90) * (Math.PI / 180));
    return Math.floor(x);
  } // returns a x-coordinate of a point on a radial line based on a given angle

  getYOnRadialLine(center: number, radius: number, angle: number): number {
    let y: number = center + radius * Math.sin((angle - 90) * (Math.PI / 180));
    return Math.floor(y);
  } // returns a y-coordinate of a point on a radial line based on a given angle
}
