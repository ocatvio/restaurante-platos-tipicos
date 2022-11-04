import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import { PedidoCard } from "./PedidoCard";
import { UserOrder } from "./UserOrder";

export const OrdenList = ({ id, pedidos, estado }) => {

  const [price, setPrice] = useState(0);

  useEffect(() => {
    let aux = 0;

    pedidos.forEach((element) => {
      aux = parseInt(element.price) + aux;
    });

    setPrice(aux);
  }, [pedidos]);
  return (
    <div className="bg-whiteC rounded-md shadow-lg lg:w-[17.5rem] w-[20.5rem] p-4">
      <UserOrder id={id} />
      {pedidos.map((p) => (
        <PedidoCard {...p} remove={true} />
      ))}

      <div className="flex justify-between pt-4 font-semibold">
        <div>
          <p>Total</p>
          <p>$ {price}</p>
        </div>
        <div className="flex gap-2 items-center">
          <XCircleIcon className="h-8 w-8 text-btn  rounded-full" />
          <CheckCircleIcon className="h-8 w-8 text-check rounded-full" />
        </div>
      </div>
    </div>
  );
};
