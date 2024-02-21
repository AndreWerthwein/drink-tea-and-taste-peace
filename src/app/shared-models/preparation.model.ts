interface Units {
  PerCup?: number;
  PerPot?: number;
}

export interface IntendedPreparation {
  TeaLeaves: Units;
  Water: Units;
  Temperature: number; // !! always in °C
  Time: number; // !! always in s
}

export interface AdaptedPreparation {
  Time?: number; // !! always in s
  Ingredients?: Array<string>;
  Method?: string;
}

export interface Preparation {
  Intended: IntendedPreparation;
  Adapted?: AdaptedPreparation;
  Infusions: number;
}
