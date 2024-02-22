import { EvaluationRange } from '../shared-types/evaluation.types';

export interface BaseProfileModel {
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

export interface LeavesBaseProfileModel {
  Odor: BaseProfileModel;
  Comment: Array<string>;
}

export interface InfusionBaseProfileModel {
  Odor: BaseProfileModel;
  Comment: Array<string>;
}

export interface TeaBaseProfileModel {
  Taste: BaseProfileModel;
  Comment: Array<string>;
}
