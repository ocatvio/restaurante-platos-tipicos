import React from "react";
import { SearchTitle } from "../components/SearchTitle";
import { StatuCard } from "../components/StatuCard";

import {
  PresentationChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon
} from "@heroicons/react/24/outline";


import { TableCar } from "../components/TableCar";
import { Sidebar } from "../components/Sidebar";


export const Dashboard = () => {
  return (
    <div className="w-full ">
      <Sidebar/>
      <div className="bg-azul w-full h-56 ">
        <SearchTitle title={'ESTADISTICAS'} />
      </div>
      <div className="flex lg:flex-row">
        <StatuCard icono={<ArrowTrendingUpIcon className="  w-9  text-whiteC" />} mtt={'-mt-0'} w={'w-56'} h={'h-56'} titulo={'Trafico'} color={'bg-insta'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
        <StatuCard icono={<CurrencyDollarIcon className="  w-9  text-whiteC" />} mtt={'-mt-12'} w={'w-56'} h={'h-40'} titulo={'Compras'} color={'bg-amari'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
        <StatuCard icono={<UsersIcon className="  w-9  text-whiteC" />} mtt={'-mt-12'} w={'w-56'} h={'h-40'} titulo={'Usuarios'} color={'bg-mora'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
        <StatuCard icono={<PresentationChartBarIcon className="  w-9  text-whiteC" />} mtt={'-mt-0'} w={'w-56'} h={'h-56'} titulo={'Performance'} color={'bg-azu'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
      </div>

    </div>
  )
}
