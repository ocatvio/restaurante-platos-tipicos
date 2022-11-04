import React from "react";
import { PlatoList } from "../components/PlatoList";
import { getPlatos } from "../helpers/getPlatos";

export const MenuPage = () => {
  

  const platos = getPlatos("plato");

  const jugos = getPlatos("jugo");


  
  

  return (
    <>
      <PlatoList title={'platos'} listas={platos}  />
      <PlatoList title={'jugos'} listas={jugos}  />
    </>
  );
};
