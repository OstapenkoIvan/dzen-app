import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const ordersSelector = (state: RootState) => state.products.orders;
export const productsSelector = (state: RootState) => state.products.products;
export const ordersProductSelector = (id: number) =>
  createSelector([productsSelector], (products) => {
    return products.filter((product) => product.order === id);
  });
