import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { RestaurantApp } from "./RestaurantApp";
import "animate.css";
import "./styles.css";
import { Sidebar } from "./admin/components/Sidebar";
import { UserPage } from "./admin/page/UserPage";
import { ShopPage } from "./admin/page/ShopPage";
import { Dashboard } from "./admin/page/Dashboard";
import { Product } from "./admin/page/Product";
import { SidebarNew } from "./admin/components/SidebarNew";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
    <BrowserRouter>
      <RestaurantApp />
    </BrowserRouter>  
  </React.StrictMode>
);
