import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ErrorBoundary from "../../modules/components/ErrorBoundaries";
import SharedLayout from "../../modules/pages/SharedLayout";
import Orders from "../../modules/components/Orders";
const Products = lazy(() => import("../../modules/components/Products"));
const OrderProducList = lazy(
  () => import("../../modules/components/OrderProductList")
);

import { ROUTES } from "../../constants";

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
