import { Version } from '@angular/core';
import {
  AppearanceInfusionModel,
  AppearanceLeavesModel,
} from '../shared-data-models/appearance.model';
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
} from '../shared-data-models/associations.model';
import {
  BaseProfileModel,
  TeaBaseProfileModel,
} from '../shared-data-models/base-porfile.model';
import { FullEvaluationModel } from '../shared-data-models/evaluation-full.model';
import { GeneralInformationModel } from '../shared-data-models/general-information.model';
import { PreparationModel } from '../shared-data-models/preparation.model';

const GENERAL: GeneralInformationModel = {
  Name: 'Zealong Oolong',
  SerialNumber: '670',
  Type: ['Oolong Tea'],
  Ingredients: ['Oolong Tea'],
  Brand: 'TeeGschwendner',
  Shop: 'TeeGschwendner',
  Price: { Original: 22.8, PackagingSize: '100 g', Reference: 22.8 },
};

const PREPARATION: PreparationModel = {
  Intended: {
    TeaLeaves: {
      PerPot: 13,
    },
    Water: {
      PerPot: 1000,
    },
    Temperature: 80,
    Time: 120,
  },
  Infusions: 1,
};

const APPEARANCE_LEAVES: AppearanceLeavesModel = {
  Size: 'MEDIUM',
  Shape: ['Curled', 'Rolled'],
  BrokenLeaves: 0,
  AdditionalParts: ['Stems'],
  Color: ['Dark Green'],
};

const APPEARANCE_INFUSION: AppearanceInfusionModel = {
  Clarity: 'CLEAR',
  Color: ['Pale Yellow', 'Pale Gold'],
  Particles: 0,
};

const ODOR_LEAVES: BaseProfileModel = {
  Fresh: 1,
  Sour: 1,
  Bitter: 2,
  Dry: 1,
  Harsh: 2,
  Sweet: 0,
  Roasty: 1,
  Smoky: 0,
  Grassy: 3,
  Earthy: 2,
  Spicy: 1,
  Fruity: 0,
  Perfumed: 1,
  Oily: 0,
  Umami: 0,
};

const ODOR_INFUSION: BaseProfileModel = {
  Fresh: 0,
  Sour: 1,
  Bitter: 2,
  Dry: 1,
  Harsh: 2,
  Sweet: 1,
  Roasty: 1,
  Smoky: 0,
  Grassy: 3,
  Earthy: 2,
  Spicy: 1,
  Fruity: 0,
  Perfumed: 1,
  Oily: 0,
  Umami: 0,
};

const OTHER_INFORMATION: Array<string> = [
  'This tea was purchased due to multiple recommendations, as well as rumors in the tea community. Unfortunately this tea, along with a selected few others — of the Zealong brand — can in Germany only be ordered via TeeGschwendner.',
];

const TEA_INFUSION: TeaBaseProfileModel = {
  Taste: {
    Fresh: 0,
    Sour: 1,
    Bitter: 0,
    Dry: 2,
    Harsh: 2,
    Sweet: 3,
    Roasty: 1,
    Smoky: 0,
    Grassy: 1,
    Earthy: 2,
    Spicy: 1,
    Fruity: 0,
    Perfumed: 1,
    Oily: 0,
    Umami: 0,
  },
  Comment: [
    'The refreshing flowery sweetness in combination with the roasty flavour resembles the famous "Milky Oolong".',
  ],
};

const BASE_ASSOCIATIONS: BaseAssociationsModel = {
  Associations: {
    Marine: 0,
    Nuts: 1,
    Spice: 1,
    Sweet: 3,
    Soap: 0,
    Vegetal: 1,
    Char: 1,
    Earthy: 1,
    Wood: 1,
    Floral: 1,
    Fruit: 0,
    Mineral: 0,
  },
  Comment: [],
};

const MARINE: MarineModel = {
  Fish: 0,
  SeaAir: 0,
  Seaweed: 0,
};

const NUTS: NutsModel = {
  Almond: 0,
  Chestnut: 0,
  Grain: 0,
  Hazelnut: 0,
  Peanut: 0,
  RoastedNuts: 1,
  Walnut: 0,
  Rice: 0,
  RoastedRice: 0,
};

const SPICE: SpiceModel = {
  Cardamom: 1,
  Cinnamon: 0,
  Clove: 0,
  Cocoa: 0,
  Licorice: 0,
  Nutmeg: 0,
  Pepper: 0,
  Vanilla: 0,
  Chili: 0,
  Ginger: 0,
};

const SWEET: SweetModel = {
  BurntSugar: 0,
  Candy: 0,
  Caramel: 0,
  Chocolate: 0,
  Honey: 0,
  Malt: 0,
  MapleSyrup: 0,
  Molasses: 1,
  Nectar: 1,
  Toffee: 0,
};

const SOAP: SoapModel = {
  BarSoap: 0,
  Ginger: 0,
};

const VEGETAL: VegetalModel = {
  Bamboo: 1,
  Cardamom: 0,
  Barnyard: 1,
  Coriander: 0,
  FreshCutGrass: 0,
  Dill: 0,
  Straw: 2,
  Eucalyptus: 0,
  Fennel: 0,
  Carrot: 0,
  Mint: 0,
  Yam: 0,
  Parsley: 0,
  Saffron: 0,
  Thyme: 0,
};

const CHAR: CharModel = {
  Ash: 0,
  BurntFood: 0,
  BurntToast: 0,
  Fireplace: 0,
  GrilledFood: 0,
  RoastedNuts: 1,
  Smoke: 0,
  Tar: 0,
  Toast: 0,
  Tobacco: 0,
};

const EARTHY: EarthyModel = {
  Earth: 1,
  Barnyard: 1,
  Compost: 0,
  DecayingWood: 0,
  Dirt: 1,
  ForestFloor: 0,
  Moss: 0,
  Mushroom: 0,
  Musty: 0,
  Peat: 0,
  WetEarth: 0,
  WetLeaves: 0,
};

const WOOD: WoodModel = {
  Bark: 0,
  Camphor: 0,
  Cedar: 1,
  CherryWood: 0,
  FreshCutWood: 0,
  Maple: 1,
  Pine: 0,
  SawDust: 0,
};

const FLORAL: FloralModel = {
  CherryBlossom: 0,
  Jasmine: 0,
  Honeysuckle: 0,
  Lavender: 0,
  OrangeBlossom: 0,
  Lilac: 0,
  Orchid: 0,
  Rose: 0,
};

const FRUIT: FruitModel = {
  Berry: 0,
  Citrus: 0,
  BlackCurrant: 0,
  Grapefruit: 0,
  Blackberry: 0,
  Lemon: 0,
  Raspberry: 0,
  Lime: 0,
  Strawberry: 0,
  Orange: 0,
  Yuzu: 0,
  Fig: 0,
  Prune: 0,
  Apricot: 0,
  Raisin: 0,
  Cherry: 0,
  Banana: 0,
  GreenApple: 0,
  Lychee: 0,
  MuscatGrape: 0,
  Mango: 0,
  Peach: 0,
  Melon: 0,
  Pear: 0,
  Pineapple: 0,
  Plum: 0,
};

const MINERAL: MineralModel = {
  Brass: 0,
  Flint: 0,
  Metallic: 0,
  Salt: 0,
  WetStones: 0,
};

export const TEA_EVALUTION: FullEvaluationModel = {
  GeneralInformation: GENERAL,
  Preparation: PREPARATION,
  Appearance: {
    Leaves: APPEARANCE_LEAVES,
    Infusion: APPEARANCE_INFUSION,
  },
  BaseProfile: {
    OdorLeaves: { Odor: ODOR_LEAVES, Comment: [] },
    OdorInfusion: { Odor: ODOR_INFUSION, Comment: [] },
    Taste: TEA_INFUSION,
  },
  BaseAssociations: BASE_ASSOCIATIONS,
  DetailAssociations: {
    Marine: MARINE,
    Nuts: NUTS,
    Spice: SPICE,
    Sweet: SWEET,
    Soap: SOAP,
    Vegetal: VEGETAL,
    Char: CHAR,
    Earthy: EARTHY,
    Wood: WOOD,
    Floral: FLORAL,
    Fruit: FRUIT,
    Mineral: MINERAL,
  },
  PersonalLiking: 7,
  Comment: OTHER_INFORMATION,
};
