export interface IOrder {
  id: number;
  title: string;
  date: string;
  description: string;
}
export interface IProduct {
  id: number;
  serialNumber: number;
  isNew: 0 | 1;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: [
    { value: number; symbol: "USD" | "UAH"; isDefault: 0 | 1 },
    { value: number; symbol: "USD" | "UAH"; isDefault: 0 | 1 }
  ];
  order: number;
  date: string;
}
export interface IInitialProductsState {
  orders: IOrder[];
  products: IProduct[];
}

export interface IOrderItem {
  order: IOrder;
  price: { USD?: number | undefined; UAH?: number | undefined };
  productsCount: number;
}
