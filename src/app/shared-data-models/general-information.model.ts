interface OriginModel {
  Country?: string;
  City?: string;
  Plantation?: string;
}

interface PriceModel {
  Original: number;
  PackagingSize: number | string;
  Reference: number; // ?? price per 100 g
}

export interface GeneralInformationModel {
  Name: string;
  SerialNumber: string;
  Type: Array<string>;
  Ingredients: Array<string>;
  Brand: string;
  Shop?: string;
  Origin?: OriginModel;
  Price: PriceModel;
}
