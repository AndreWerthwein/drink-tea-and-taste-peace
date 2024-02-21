interface Origin {
  Country?: string;
  City?: string;
  Plantation?: string;
}

interface Price {
  Original: number;
  PackagingSize: number;
  Reference: number; // ?? price per 100 g
}

export interface GeneralInformation {
  Name: string;
  SerialNumber: string;
  Type: Array<string>;
  Ingredients: Array<string>;
  Brand: string;
  Shop?: string;
  Origin?: Origin;
  Price: Price;
}
