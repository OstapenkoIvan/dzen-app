import { createSlice } from "@reduxjs/toolkit";
import { IInitialProductsState } from "./../../types";

export const productsInitialState: IInitialProductsState = {
  orders: [
    {
      id: 1,
      title: "Order 1",
      date: "2017-06-29 12:09:33",
      description: "desc",
    },
    {
      id: 2,
      title: "Order 2",
      date: "2017-06-29 12:09:33",
      description: "desc",
    },
    {
      id: 3,
      title: "Order 3",
      date: "2017-06-29 12:09:33",
      description: "desc",
    },
  ],
  products: [
    {
      id: 1,
      serialNumber: 1234,
      isNew: 1,
      photo: "pathToFile.jpg",
      title: "Product 1",
      type: "Monitors",
      specification: "Specification 1",
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 1,
      date: "2017-06-29 12:09:33",
    },
    {
      id: 2,
      serialNumber: 1234,
      isNew: 1,
      photo: "pathToFile.jpg",
      title: "Product 1",
      type: "Monitors",
      specification: "Specification 1",
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 2,
      date: "2017-06-29 12:09:33",
    },
    {
      id: 3,
      serialNumber: 1234,
      isNew: 0,
      photo: "pathToFile.jpg",
      title: "Product 1",
      type: "Monitors",
      specification: "Specification 1",
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 2,
      date: "2017-06-29 12:09:33",
    },
    {
      id: 4,
      serialNumber: 1234,
      isNew: 1,
      photo: "pathToFile.jpg",
      title: "Product 1",
      type: "Monitors",
      specification: "Specification 1",
      guarantee: {
        start: "2017-06-29 12:09:33",
        end: "2017-06-29 12:09:33",
      },
      price: [
        { value: 100, symbol: "USD", isDefault: 0 },
        { value: 2600, symbol: "UAH", isDefault: 1 },
      ],
      order: 3,
      date: "2017-06-29 12:09:33",
    },
  ],
};
// export const productsInitialState: IInitialProductsState = {
//   orders: [],
//   products: [],
// };

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  reducers: {
    addProduct(state, { payload }) {
      state.products = { ...state.products, payload };
    },
    addOrder(state, { payload }) {
      state.orders = { ...state.orders, payload };
    },
    removeProduct(state, { payload }) {
      state.products = state.products.filter(
        (product) => product.id !== payload
      );
    },
    removeOrder(state, { payload }) {
      state.orders = state.orders.filter((order) => order.id !== payload);
    },
  },
});

export const { addProduct, addOrder, removeProduct, removeOrder } =
  productsSlice.actions;
export const productsReducer = productsSlice.reducer;
