import { EvaluationRange } from '../shared-types/evaluation.types';

export interface EvaluationSummaryModel {
  Name: string;
  SerialNumber: string;
  Type: Array<string>;
  Ingredients: Array<string>;
  PersonalLiking: EvaluationRange;
  EvaluationKey: Array<number>; // ?? this key is an composition of the values from the basic taste profil and therefore not a unique id
}
