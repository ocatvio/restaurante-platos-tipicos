import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";

import { RestaurantsRouter } from "../restaurant";

import { PublicRoute } from "./PublicRoute";
import { RouterPrivate } from "./RouterPrivate";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <RouterPrivate>
              <RestaurantsRouter />
            </RouterPrivate>
          }
        />
      </Routes>
    </>
  );
};
