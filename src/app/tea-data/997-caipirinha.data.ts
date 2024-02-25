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
