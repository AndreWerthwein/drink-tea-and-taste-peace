import { EvaluationRange } from '../shared-types/evaluation.types';

export interface BaseProfile {
  Fresh: EvaluationRange;
  Sour: EvaluationRange;
  Bitter: EvaluationRange;
  Dry: EvaluationRange;
  Harsh: EvaluationRange;
  Sweet: EvaluationRange;
  Roasty: EvaluationRange;
  Smoky: EvaluationRange;
  Grassy: EvaluationRange;
  Earthy: EvaluationRange;
  Spicy: EvaluationRange;
  Fruity: EvaluationRange;
  Perfumed: EvaluationRange;
  Oily: EvaluationRange;
  Umami: EvaluationRange;
}

export interface LeavesBaseProfile {
  Odor: BaseProfile;
  Comment: Array<string>;
}

export interface InfusionBaseProfile {
  Odor: BaseProfile;
  Comment: Array<string>;
}

export interface TeaBaseProfile {
  Taste: BaseProfile;
  Comment: Array<string>;
}
