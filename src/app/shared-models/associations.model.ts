import { EvaluationRange } from '../shared-types/evaluation.types';

export interface BaseAssociations {
  Marine: EvaluationRange;
  Nuts: EvaluationRange;
  Spice: EvaluationRange;
  Sweet: EvaluationRange;
  Soap: EvaluationRange;
  Vegetal: EvaluationRange;
  Char: EvaluationRange;
  Earthy: EvaluationRange;
  Wood: EvaluationRange;
  Floral: EvaluationRange;
  Fruit: EvaluationRange;
  Mineral: EvaluationRange;
  Comment: Array<string>;
}

export interface Marine {
  Fish: EvaluationRange;
  SeaAir: EvaluationRange;
  Seaweed: EvaluationRange;
}

export interface Nuts {
  Almond: EvaluationRange;
  Chestnut: EvaluationRange;
  Grain: EvaluationRange;
  Hazelnut: EvaluationRange;
  Peanut: EvaluationRange;
  RoastedNuts: EvaluationRange;
  Walnut: EvaluationRange;
  Rice: EvaluationRange;
  RoastedRice: EvaluationRange;
}

export interface Spice {
  Cardamom: EvaluationRange;
  Cinnamon: EvaluationRange;
  Clove: EvaluationRange;
  Cocoa: EvaluationRange;
  Licorice: EvaluationRange;
  Nutmeg: EvaluationRange;
  Pepper: EvaluationRange;
  Vanilla: EvaluationRange;
  Chili: EvaluationRange;
  Ginger: EvaluationRange;
}

export interface Sweet {
  BurntSugar: EvaluationRange;
  Candy: EvaluationRange;
  Caramel: EvaluationRange;
  Chocolate: EvaluationRange;
  Honey: EvaluationRange;
  Malt: EvaluationRange;
  MapleSyrup: EvaluationRange;
  Molasses: EvaluationRange;
  Nectar: EvaluationRange;
  Toffee: EvaluationRange;
}

export interface Soap {
  BarSoap: EvaluationRange;
  Ginger: EvaluationRange;
}

export interface Vegetal {
  Bamboo: EvaluationRange;
  Cardamom: EvaluationRange;
  Barnyard: EvaluationRange;
  Coriander: EvaluationRange;
  FreshCutGrass: EvaluationRange;
  Dill: EvaluationRange;
  Straw: EvaluationRange;
  Eucalyptus: EvaluationRange;
  Fennel: EvaluationRange;
  Carrot: EvaluationRange;
  Mint: EvaluationRange;
  Yam: EvaluationRange;
  Parsley: EvaluationRange;
  Saffron: EvaluationRange;
  Thyme: EvaluationRange;
}

export interface Char {
  Ash: EvaluationRange;
  BurntFood: EvaluationRange;
  BurntToast: EvaluationRange;
  Fireplace: EvaluationRange;
  GrilledFood: EvaluationRange;
  RoastedNuts: EvaluationRange;
  Smoke: EvaluationRange;
  Tar: EvaluationRange;
  Toast: EvaluationRange;
  Tobacco: EvaluationRange;
}

export interface Earthy {
  Earth: EvaluationRange;
  Barnyard: EvaluationRange;
  Compost: EvaluationRange;
  DecayingWood: EvaluationRange;
  Dirt: EvaluationRange;
  ForestFloor: EvaluationRange;
  Moss: EvaluationRange;
  Mushroom: EvaluationRange;
  Musty: EvaluationRange;
  Peat: EvaluationRange;
  WetEarth: EvaluationRange;
  WetLeaves: EvaluationRange;
}

export interface Wood {
  Bark: EvaluationRange;
  Camphor: EvaluationRange;
  Cedar: EvaluationRange;
  CherryWood: EvaluationRange;
  FreshCutWood: EvaluationRange;
  Maple: EvaluationRange;
  Pince: EvaluationRange;
  SawDust: EvaluationRange;
}

export interface Floral {
  CherryBlossom: EvaluationRange;
  Jasmine: EvaluationRange;
  Honeysuckle: EvaluationRange;
  Lavender: EvaluationRange;
  OrangeBlossom: EvaluationRange;
  Lilac: EvaluationRange;
  Orchid: EvaluationRange;
  Rose: EvaluationRange;
}

export interface Fruit {
  Berry: EvaluationRange;
  Citrus: EvaluationRange;
  BlackCurrant: EvaluationRange;
  Grapefruit: EvaluationRange;
  Blackberry: EvaluationRange;
  Lemon: EvaluationRange;
  Raspberry: EvaluationRange;
  Lime: EvaluationRange;
  Strawberry: EvaluationRange;
  Orange: EvaluationRange;
  Yuzu: EvaluationRange;
  Fig: EvaluationRange;
  Prune: EvaluationRange;
  Apricot: EvaluationRange;
  Raisin: EvaluationRange;
  Cherry: EvaluationRange;
  Banana: EvaluationRange;
  GreenApple: EvaluationRange;
  Lychee: EvaluationRange;
  MuscatGrape: EvaluationRange;
  Mango: EvaluationRange;
  Peach: EvaluationRange;
  Melon: EvaluationRange;
  Pear: EvaluationRange;
  Pineapple: EvaluationRange;
  Plum: EvaluationRange;
}

export interface Mineral {
  Brass: EvaluationRange;
  Flint: EvaluationRange;
  Metallic: EvaluationRange;
  Salt: EvaluationRange;
  WetStones: EvaluationRange;
}
