import React from "react";
import { SearchTitle } from "../components/SearchTitle";
import { StatuCard } from "../components/StatuCard";

import {
 
  CurrencyDollarIcon,

} from "@heroicons/react/24/outline";
import { TableCar } from "../components/TableCar";

export const ShopPage = () => {
  return (
    <div className="w-full h-64">
      <div className="bg-azul w-full h-64  ">
        <SearchTitle title={'COMPRAS'} />
      </div>
      <div className="flex lg:flex-row">
     
      <StatuCard icono={<CurrencyDollarIcon className="  w-9  text-whiteC" />} mtt={'-mt-12'} w={'w-56'} h={'h-40'} titulo={'Compras'} color={'bg-amari'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
      
      </div>
      <TableCar color={'text-amari'}/>
    </div>
  );
};
