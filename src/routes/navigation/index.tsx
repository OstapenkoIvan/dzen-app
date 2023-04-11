import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorBoundary from "../../modules/components/ErrorBoundaries";
import SharedLayout from "../../modules/pages/SharedLayout";
import Orders from "../../modules/components/Orders";
import Products from "../../modules/components/Products";
import OrderProducList from "../../modules/components/OrderProductList";

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
            <OrderProducList />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.groups}
        element={
          <ErrorBoundary>
            <Products />
          </ErrorBoundary>
        }
      />
    </Route>
    // <Route>
    //   <Route element={<SharedLayout />}>
    //       <Route
    //         path={ROUTES.orders}
    //         element={
    //           <ErrorBoundary>
    //             <Orders />
    //           </ErrorBoundary>
    //         }
    //       />
    //     </Route>
    // </Route>
  ),
  { basename: "/" }
);
