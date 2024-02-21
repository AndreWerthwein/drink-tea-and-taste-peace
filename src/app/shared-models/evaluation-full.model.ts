import { GeneralInformation } from './detail-information.model';
import { Preparation } from './preparation.model';
import { Appearance } from './appearance.model';
import {
  InfusionBaseProfile,
  LeavesBaseProfile,
  TeaBaseProfile,
} from './base-porfile.model';
import {
  BaseAssociations,
  Char,
  Earthy,
  Floral,
  Fruit,
  Marine,
  Mineral,
  Nuts,
  Soap,
  Spice,
  Sweet,
  Vegetal,
  Wood,
} from './associations.model';
import { EvaluationRange } from '../shared-types/evaluation.types';

export interface FullEvaluation {
  GeneralInformation: GeneralInformation;
  Preparation: Preparation;
  Appearance: Appearance;
  BaseProfile: {
    OdorLeaves: LeavesBaseProfile;
    OdorInfusion: InfusionBaseProfile;
    Taste: TeaBaseProfile;
  };
  BaseAssociations: BaseAssociations;
  DetailAssociations: {
    Marine: Marine;
    Nuts: Nuts;
    Spice: Spice;
    Sweet: Sweet;
    Soap: Soap;
    Vegetal: Vegetal;
    Char: Char;
    Earthy: Earthy;
    Wood: Wood;
    Floral: Floral;
    Fruit: Fruit;
    Mineral: Mineral;
  };
  PersonalLiking: EvaluationRange;
  Comment: Array<string>;
}
