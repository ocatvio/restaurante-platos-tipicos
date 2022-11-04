import React, { useContext, useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { MenuItem } from "./MenuItem";
import { RestContext } from "../context/RestContext";

const estadoInicial = {
  con1: 0,
  con2: 5,
  con3: 5,
};

export const PlatoList = ({ title, listas = [] }) => {

  const {addCar} = useContext(RestContext);

 
  const [contador, setcontador] = useState(estadoInicial);


  const fin = listas.length;

  const { con1, con2, con3 } = contador;

  const newList = listas.slice(con1, con2);


  const onSiguiente = () => {
    if (con2 >= fin) {
      setcontador(estadoInicial);

      return;
    }

    setcontador({
      con1: con1 + 5,
      con2: con2 + 5,
    });
  };

  const onAnterior = () => {
    const incial = fin - (con3 === 5 ? con3 : con3);
    const finald = fin - (con3 === 5 ? 0 : 5);

    if (incial <= 0) {
      if ((con1 == 0) & (con2 == 5)) {
        return;
      }
      setcontador(estadoInicial);
      return;
    }

    setcontador({
      con1: incial,
      con2: finald,
      con3: con3 + con3,
    });
  };

  const agregarCompra = (nuevaCompra) => {
    addCar(nuevaCompra)
  };

  return (
    <>
      <h2 className="text-lg font-semibold mt-14">{title}</h2>

      <div className="lg:flex justify-between   items-center">
        <button
          onClick={onAnterior}
          className="mt-4 mr-6 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded-full"
        >
          <ArrowLeftIcon className="h-7 w-7 p-2 bg-icono rounded-full text-whiteC focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 " />
        </button>
        <div className="lg:flex grid sm:grid-col-1 md:grid-cols-3 justify-center  lg:gap-14 md:gap-12 sm:gap-2 items-center content-around ">
          {newList.map((lista) => (
            <MenuItem key={lista.id} {...lista} onNuevaCompra={agregarCompra} />
          ))}
          <button
            onClick={onSiguiente}
            className=" mt-4  block hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded-full"
          >
            <ArrowRightIcon className=" h-7 w-7 p-2 bg-btn rounded-full text-whiteC focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
          </button>
        </div>
      </div>
    </>
  );
};
