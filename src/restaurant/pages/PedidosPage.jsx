import React, { useContext } from "react";
import { OrdenList } from "../components/OrdenList";

import { RestContext } from "../context/RestContext";

export const PedidosPage = () => {
  const { listPedidos } = useContext(RestContext);

  //  listPedidos.forEach(element => {
  //   console.log('foreach');
  //   console.log(element)
  //  });




  return (
    <div className="animate__animated animate__fadeIn grid justify-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-x-6 gap-x-20 gap-y-2 ">
      {listPedidos.map((pedido,i) => (
        
        <OrdenList key={pedido.id } id={i} pedidos={pedido.pedidos} estado={pedido.estado} />
      ))} 
    </div>
  );
};
