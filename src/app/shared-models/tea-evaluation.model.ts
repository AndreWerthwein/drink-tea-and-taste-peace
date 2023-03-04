export class TeaEvaluation {
  GeneralInformation: GeneralInformation;
  Preparation: Preparation;
  AppearanceTeaLeaves: AppearanceTeaLeaves;
  AppearanceTeaInfusion: AppearanceTeaInfusion;
  SmellOfTeaLeaves: GenericPropertyPattern;
  SmellOfTeaInfusion: GenericPropertyPattern;
  OtherInformation: string;
  GenericTastePattern: GenericPropertyPattern;
  OtherProperties: string;
  GenericAssociationPattern: GenericAssociationPattern;
  Association: {
    Marine: AssociationMarine;
    Nuts: AssociationNuts;
    Spice: AssociationSpice;
    Sweet: AssociationSweet;
    Soap: AssociationSoap;
    Vegetal: AssociationVegetal;
    Char: AssociationChar;
    Earthy: AssociationEarthy;
    Wood: AssociationWood;
    Floral: AssociationFloral;
    Fruit: AssociationFruit;
    Mineral: AssociationMineral;
  };
}

export class GeneralInformation {
  Name: string;
  SerialNumber: string;
  Type: Array<string>;
  Ingredients: Array<string>;
  Brand: string;
  Origin: {
    Country: string;
    City: string;
    Plantation: string;
  };
  Price: {
    Value: number;
    Unit: string;
  };
  PackagingSize: {
    Value: number;
    Unit: string;
  };
}

export class Preparation {
  AmountOfTea: Amount;
  AmountOfWater: Amount;
  Temperature: {
    Value: number;
    Unit: string;
  };
  Time: number;
  IndividualAdaption: string;
  AdditionalIngredients?: Array<string>;
  SpecialMethod?: string;
  InfusionsPossible: number;
}

class Amount {
  Cup: {
    Value: number;
    Unit: string;
  };
  Pot: {
    Value: number;
    Unit: string;
  };
}

export class AppearanceTeaLeaves {
  Size: Array<string>;
  Shape: Array<string>;
  BrokenLeaves: number;
  AdditionalParts: Array<string>;
  Color: Array<string>;
}

export class AppearanceTeaInfusion {
  Clarity: Array<string>;
  Color: Array<string>;
  Particles: number;
}

export class GenericPropertyPattern {
  Fresh: number;
  Sour: number;
  Bitter: number;
  Dry: number;
  Harsh: number;
  Sweet: number;
  Roasty: number;
  Smoky: number;
  Grassy: number;
  Earthy: number;
  Spicy: number;
  Fruity: number;
  Perfumed: number;
  Oily: number;
  Umami: number;
}

export class GenericAssociationPattern {
  Marine: {
    Value: number;
    Comment: string;
  };
  Nuts: {
    Value: number;
    Comment: string;
  };
  Spice: {
    Value: number;
    Comment: string;
  };
  Sweet: {
    Value: number;
    Comment: string;
  };
  Soap: {
    Value: number;
    Comment: string;
  };
  Vegetal: {
    Value: number;
    Comment: string;
  };
  Char: {
    Value: number;
    Comment: string;
  };
  Earthy: {
    Value: number;
    Comment: string;
  };
  Wood: {
    Value: number;
    Comment: string;
  };
  Floral: {
    Value: number;
    Comment: string;
  };
  Fruit: {
    Value: number;
    Comment: string;
  };
  Mineral: {
    Value: number;
    Comment: string;
  };
}

export class AssociationMarine {
  Fish: number;
  SeaAir: number;
  Seaweed: number;
}

export class AssociationNuts {
  Almond: number;
  Chestnut: number;
  Grain: number;
  Hazelnut: number;
  Peanut: number;
  RoastedNuts: number;
  Walnut: number;
  Rice: number;
  RoastedRice: number;
}

export class AssociationSpice {
  Cardamom: number;
  Cinnamon: number;
  Clove: number;
  Cocoa: number;
  Licorice: number;
  Nutmeg: number;
  Pepper: number;
  Vanilla: number;
  Chili: number;
  Ginger: number;
}

export class AssociationSweet {
  BurntSugar: number;
  Candy: number;
  Caramel: number;
  Chocolate: number;
  Honey: number;
  Malt: number;
  MapleSyrup: number;
  Molasses: number;
  Nectar: number;
  Toffee: number;
}

export class AssociationSoap {
  BarSoap: number;
  Ginger: number;
}

export class AssociationVegetal {
  Bamboo: number;
  Cardamom: number;
  Barnyard: number;
  Coriander: number;
  FreshCutGrass: number;
  Dill: number;
  Straw: number;
  Eucalyptus: number;
  Fennel: number;
  Carrot: number;
  Mint: number;
  Yam: number;
  Parsley: number;
  Saffron: number;
  Thyme: number;
}

export class AssociationChar {
  Ash: number;
  BurntFood: number;
  BurntToast: number;
  Fireplace: number;
  GrilledFood: number;
  RoastedNuts: number;
  Smoke: number;
  Tar: number;
  Toast: number;
  Tobacco: number;
}

export class AssociationEarthy {
  Earth: number;
  Barnyard: number;
  Compost: number;
  DecayingWood: number;
  Dirt: number;
  ForestFloor: number;
  Moss: number;
  Mushroom: number;
  Musty: number;
  Peat: number;
  WetEarth: number;
  WetLeaves: number;
}

export class AssociationWood {
  Bark: number;
  Camphor: number;
  Cedar: number;
  CherryWood: number;
  FreshCutWood: number;
  Maple: number;
  Pine: number;
  SawDust: number;
}

export class AssociationFloral {
  CherryBlossom: number;
  Jasmine: number;
  Honeysuckle: number;
  Lavendar: number;
  OrangeBlossom: number;
  Lilac: number;
  Orchid: number;
  Rose: number;
}

export class AssociationFruit {
  Berry: number;
  Citrus: number;
  BlackCurrant: number;
  Grapefruit: number;
  Blackberry: number;
  Lemon: number;
  Raspberry: number;
  Lime: number;
  Strawberry: number;
  Orange: number;
  Yuzu: number;
  Fig: number;
  Prune: number;
  Apricot: number;
  Raisin: number;
  Cherry: number;
  Banana: number;
  GreenApple: number;
  Lychee: number;
  MuscatGrape: number;
  Mango: number;
  Peach: number;
  Melon: number;
  Pear: number;
  Pineapple: number;
  Plum: number;
}

export class AssociationMineral {
  Brass: number;
  Flint: number;
  Metallic: number;
  Salt: number;
  WetStones: number;
}
