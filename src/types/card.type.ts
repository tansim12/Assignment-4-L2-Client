import { TProduct } from "./products.type";

export interface ICard {
  showBuyButton?: boolean;
  item?: Partial<TProduct>;
}
