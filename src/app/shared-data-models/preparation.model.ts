interface UnitsModel {
  PerCup?: number;
  PerPot?: number;
}

export interface IntendedPreparationModel {
  TeaLeaves: UnitsModel;
  Water: UnitsModel;
  Temperature: number; // !! always in °C
  Time: number; // !! always in s
}

export interface AdaptedPreparationModel {
  Time?: number; // !! always in s
  Ingredients?: Array<string>;
  Method?: string;
}

export interface PreparationModel {
  Intended: IntendedPreparationModel;
  Adapted?: AdaptedPreparationModel;
  Infusions: number;
}
