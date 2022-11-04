
import { SearchTitle } from "../components/SearchTitle";
import { StatuCard } from "../components/StatuCard";

import {
 
  UsersIcon,

} from "@heroicons/react/24/outline";
import { TableCar } from "../components/TableCar";
export const UserPage = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-azul w-full h-64">
        <SearchTitle title={'USUARIOS'} />
      </div>
      <div className="flex lg:flex-row  ">
     
      <StatuCard icono={<UsersIcon className="  w-9  text-whiteC" />} mtt={'-mt-12'} w={'w-56'} h={'h-40'} titulo={'Usuarios'} color={'bg-mora'} numero={'350,896'} visitas={'31.15'} fecha={'desde mes pasado'} />
      
      </div>
      <TableCar color={'text-mora'}/>
    </div>
  );
}
