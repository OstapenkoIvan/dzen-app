import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ErrorBoundary from "../../modules/components/ErrorBoundaries";
import SharedLayout from "../../modules/pages/SharedLayout";
import Loader from "../../modules/components/Loader";
import Orders from "../../modules/components/Orders";
const Products = lazy(() => import("../../modules/components/Products"));
const OrderProducList = lazy(
  () => import("../../modules/components/OrderProductList")
);

import { ROUTES } from "../../constants";

export const MainRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      <Routes location={location} key={location.pathname}>
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
                <Suspense fallback={<Loader />}>
                  <OrderProducList />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path={ROUTES.groups}
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                  <Products />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="*"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                  <h1>This route doesnt exist</h1>
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

// export const mainRouter = createBrowserRouter(
//   createRoutesFromElements(
// <Route element={<SharedLayout />}>
//   <Route
//     path={ROUTES.orders}
//     element={
//       <ErrorBoundary>
//         <Orders />
//       </ErrorBoundary>
//     }
//   />
//   <Route
//     path={ROUTES.orderId}
//     element={
//       <ErrorBoundary>
//         <Suspense fallback={<h1>Loading...</h1>}>
//           <OrderProducList />
//         </Suspense>
//       </ErrorBoundary>
//     }
//   />
//   <Route
//     path={ROUTES.groups}
//     element={
//       <ErrorBoundary>
//         <Suspense fallback={<h1>Loading...</h1>}>
//           <Products />
//         </Suspense>
//       </ErrorBoundary>
//     }
//   />
// </Route>
//   ),
//   { basename: "/" }
// );
