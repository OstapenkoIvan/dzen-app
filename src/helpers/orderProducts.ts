import { IProduct } from "../types";

export const orderProducts = (products: IProduct[], id: number) => {
  const currentProducts = products.filter((product) => product.order === id);
  const price = currentProducts.reduce((acc, val) => {
    acc[val.price[0].symbol] === undefined
      ? (acc[val.price[0].symbol] = val.price[0].value)
      : (acc[val.price[0].symbol] += val.price[0].value);
    acc[val.price[1].symbol] === undefined
      ? (acc[val.price[1].symbol] = val.price[1].value)
      : (acc[val.price[1].symbol] += val.price[1].value);
    return acc;
  }, {} as { USD?: number; UAH?: number });
  const productsCount = currentProducts.length;

  return { price, productsCount, currentProducts };
};
