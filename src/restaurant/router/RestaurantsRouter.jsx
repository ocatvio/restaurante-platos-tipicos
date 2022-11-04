import { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components";
import {
  HeroPage,
  AboutPage,
  MenuPage,
  PedidosPage,
  DetallePage,
  FooterPage,
} from "..";
import { AuthContext } from "../../auth";
import { Dashboard } from "../../admin/page/Dashboard";
import { UserPage } from "../../admin/page/UserPage";
import { ShopPage } from "../../admin/page/ShopPage";
import { Product } from "../../admin/page/Product";
import { Sidebar } from "../../admin/components/Sidebar";

export const RestaurantsRouter = () => {
  const { user } = useContext(AuthContext);

  return (
      <div>
        <Navbar />
        <div className="mx-auto w-[89%]">
          <Routes>
            <Route path="hero" element={<HeroPage />} />

            <Route path="menu" element={<MenuPage />} />

            <Route path="about" element={<AboutPage />} />

            <Route path="pedidos" element={<PedidosPage />} />

            <Route path="detalle/:id" element={<DetallePage />} />

            <Route path="/" element={<Navigate to="/hero" />} />
          </Routes>
          <FooterPage />
        </div>
      </div>
  );
};
