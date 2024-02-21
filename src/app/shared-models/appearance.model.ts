import { EvaluationRange } from '../shared-types/evaluation.types';

export interface AppearanceLeaves {
  Size: 'POWDER' | 'BROKEN' | 'CUT' | 'SMALL' | 'MEDIUM' | 'LARGE'; // ?? on average
  Shape: Array<string>; // ?? on average
  BrokenLeaves: EvaluationRange; // ?? amount
  AdditionalParts: Array<string>;
  Color: Array<string>;
}

export interface AppearanceInfusion {
  Clarity: 'CLEAR' | 'SLIGHTLY_HAZY' | 'HAZY' | 'OPAQUE'; // ?? on average
  Color: Array<string>;
  Particles: EvaluationRange;
}

export interface Appearance {
  Leaves: AppearanceLeaves;
  Infusion: AppearanceInfusion;
}
