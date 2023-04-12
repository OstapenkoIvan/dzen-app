import { IProduct } from "../types";

export const orderProducts = (products: IProduct[], id: number) => {
  const currentProducts = products.filter((product) => product.order === id);

  const price = currentProducts.reduce((acc, val) => {
    const priceOne = val.price[0].symbol;
    const priceTwo = val.price[1].symbol;

    acc[priceOne] === undefined
      ? (acc[priceOne] = val.price[0].value)
      : // @ts-ignore
        (acc[priceOne] += val.price[0].value);
    acc[priceTwo] === undefined
      ? (acc[priceTwo] = val.price[1].value)
      : // @ts-ignore
        (acc[priceTwo] += val.price[1].value);

    return acc;
  }, {} as { USD?: number; UAH?: number });

  const productsCount = currentProducts.length;

  return { price, productsCount, currentProducts };
};
