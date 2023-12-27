export interface IProduct {
  image: string;
  name: string;
  store: number;
  website: number;
  ecommerce: number;
}

export enum ETimeOptions {
  THIS_WEEK,
  THIS_MONTH,
  THIS_YEAR,
}
