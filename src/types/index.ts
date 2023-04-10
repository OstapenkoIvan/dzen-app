export interface IOrder {
  id: Number;
  title: String;
  date: String;
  description: String;
}
export interface IProduct {
  id: Number;
  serialNumber: Number;
  isNew: 0 | 1;
  photo: String;
  title: String;
  type: String;
  specification: String;
  guarantee: {
    start: String;
    end: String;
  };
  price: [
    { value: Number; symbol: "USD" | "UAH"; isDefault: 0 | 1 },
    { value: Number; symbol: "USD" | "UAH"; isDefault: 0 | 1 }
  ];
  order: Number;
  date: String;
}
export interface IInitialProductsState {
  orders: IOrder[];
  products: IProduct[];
}
