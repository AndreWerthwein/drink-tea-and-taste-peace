import { GeneralInformationModel } from './general-information.model';
import { PreparationModel } from './preparation.model';
import { AppearanceModel } from './appearance.model';
import {
  InfusionBaseProfileModel,
  LeavesBaseProfileModel,
  TeaBaseProfileModel,
} from './base-porfile.model';
import { EvaluationRange } from '../shared-types/evaluation.types';

export interface ShortEvaluationModel {
  GeneralInformation: GeneralInformationModel;
  Preparation: PreparationModel;
  Appearance: AppearanceModel;
  BaseProfile: {
    OdorLeaves: LeavesBaseProfileModel;
    OdorInfusion: InfusionBaseProfileModel;
    Taste: TeaBaseProfileModel;
  };
  PersonalLiking: EvaluationRange;
  Comment: Array<string>;
}
