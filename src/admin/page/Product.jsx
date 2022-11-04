import { SearchTitle } from "../components/SearchTitle";
import { StatuCard } from "../components/StatuCard";

import {
 
  UsersIcon,

} from "@heroicons/react/24/outline";
import { TableCar } from "../components/TableCar";
export const Product = () => {
  return (
    <div className="w-full h-[100vh]">
    <div className="bg-azul w-full h-64 ">
      <SearchTitle title={'PRODUCTOS'} />
    </div>
    <div className="flex lg:flex-row">
   
    <StatuCard icono={<UsersIcon className="  w-9  text-whiteC " />} mtt={'-mt-12'} w={'w-56'} h={'h-40'} titulo={'Produtos'} color={'bg-azu'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
    
    </div>
    <TableCar color={'text-azu'}/>
  </div>
  )
}
