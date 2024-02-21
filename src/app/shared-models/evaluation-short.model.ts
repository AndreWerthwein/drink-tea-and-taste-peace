import { GeneralInformation } from './detail-information.model';
import { Preparation } from './preparation.model';
import { Appearance } from './appearance.model';
import {
  InfusionBaseProfile,
  LeavesBaseProfile,
  TeaBaseProfile,
} from './base-porfile.model';
import { EvaluationRange } from '../shared-types/evaluation.types';

export interface ShortEvaluation {
  GeneralInformation: GeneralInformation;
  Preparation: Preparation;
  Appearance: Appearance;
  BaseProfile: {
    OdorLeaves: LeavesBaseProfile;
    OdorInfusion: InfusionBaseProfile;
    Taste: TeaBaseProfile;
  };
  PersonalLiking: EvaluationRange;
  Comment: Array<string>;
}
