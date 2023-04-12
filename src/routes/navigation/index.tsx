import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorBoundary from "../../modules/components/ErrorBoundaries";
// const ErrorBoundary = lazy(
// () => import("../../modules/components/ErrorBoundaries")
// );
import SharedLayout from "../../modules/pages/SharedLayout";
import Orders from "../../modules/components/Orders";
// import Products from "../../modules/components/Products";
const Products = lazy(() => import("../../modules/components/Products"));
// import OrderProducList from "../../modules/components/OrderProductList";
const OrderProducList = lazy(
  () => import("../../modules/components/OrderProductList")
);

import { ROUTES } from "../../constants";

// TODO add lazyload and suspense

export const mainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SharedLayout />}>
      <Route
        path={ROUTES.orders}
        element={
          <ErrorBoundary>
            <Orders />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.orderId}
        element={
          <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
              <OrderProducList />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.groups}
        element={
          <ErrorBoundary>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Products />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </Route>
  ),
  { basename: "/" }
);
