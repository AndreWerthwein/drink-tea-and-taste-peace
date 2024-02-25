import {
  AppearanceInfusionModel,
  AppearanceLeavesModel,
} from '../shared-data-models/appearance.model';
import { GeneralInformationModel } from '../shared-data-models/general-information.model';
import { PreparationModel } from '../shared-data-models/preparation.model';

export const GENERAL: GeneralInformationModel = {
  Name: 'Caipirinha',
  SerialNumber: '997',
  Type: ['Green Tea'],
  Ingredients: ['Green Tea', 'Lemon Peels', 'Flavouring'],
  Brand: 'TeeGschwendner',
  Shop: 'TeeGschwendner',
  Price: { Original: 0, PackagingSize: 'Sample', Reference: 5.5 },
};

export const PREPARATION: PreparationModel = {
  Intended: {
    TeaLeaves: {
      PerCup: 6,
      PerPot: 12,
    },
    Water: {
      PerCup: 500,
      PerPot: 1000,
    },
    Temperature: 70,
    Time: 120,
  },
  Infusions: 1,
};

export const APPEARANCE_LEAVES: AppearanceLeavesModel = {
  Size: 'SMALL',
  Shape: ['Rolled', 'Twisted'],
  BrokenLeaves: 5,
  AdditionalParts: ['Stems'],
  Color: ['Dark Green'],
};

export const APPEARANCE_INFUSION: AppearanceInfusionModel = {
  Clarity: 'CLEAR',
  Color: ['Light Green', 'Fresh Green'],
  Particles: 5,
};
