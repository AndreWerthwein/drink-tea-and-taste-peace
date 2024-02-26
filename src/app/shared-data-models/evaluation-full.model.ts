import { GeneralInformationModel } from './general-information.model';
import { PreparationModel } from './preparation.model';
import { AppearanceModel } from './appearance.model';
import {
  InfusionBaseProfileModel,
  LeavesBaseProfileModel,
  TeaBaseProfileModel,
} from './base-porfile.model';
import {
  BaseAssociationsModel,
  CharModel,
  EarthyModel,
  FloralModel,
  FruitModel,
  MarineModel,
  MineralModel,
  NutsModel,
  SoapModel,
  SpiceModel,
  SweetModel,
  VegetalModel,
  WoodModel,
} from './associations.model';
import { EvaluationRange } from '../shared-types/evaluation.types';

export interface FullEvaluationModel {
  GeneralInformation: GeneralInformationModel;
  Preparation: PreparationModel;
  Appearance: AppearanceModel;
  BaseProfile: {
    OdorLeaves: LeavesBaseProfileModel;
    OdorInfusion: InfusionBaseProfileModel;
    Taste: TeaBaseProfileModel;
  };
  BaseAssociations: BaseAssociationsModel;
  DetailAssociations: {
    Marine: MarineModel;
    Nuts: NutsModel;
    Spice: SpiceModel;
    Sweet: SweetModel;
    Soap: SoapModel;
    Vegetal: VegetalModel;
    Char: CharModel;
    Earthy: EarthyModel;
    Wood: WoodModel;
    Floral: FloralModel;
    Fruit: FruitModel;
    Mineral: MineralModel;
  };
  PersonalLiking: EvaluationRange;
  Comment: Array<string>;
}
