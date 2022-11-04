import {
  ShoppingCartIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import { getPlatoById } from "../helpers/getPlatoById";

export const MenuItem = ({ description, name, price, url, id,onNuevaCompra }) => {

 const agregarCarrito = ()=>{

  const plato=getPlatoById(id)

  onNuevaCompra(plato);

 }
  

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="  lg:mt-10 mt-24   flex relative">
        <div className="bg-fondoCard h-72 lg:w-60 w-64 rounded-lg shadow-xl pt-28 px-6  ">
          <h3 className="mt-4 font-semibold opacity-80">{name}</h3>
          <p className="pt-2 text-sm opacity-50">{description}</p>
          <span className="pt-6 flex items-center justify-between">
            <b>$ {price}</b>{" "}
            <Link to={`/detalle/${id}`} className="rounded-full bg-gray-800  text-gray-400 hover:text-whiteC focus:outline-none focus:ring-2 focus:ring-white  focus:ring-offset-gray-800">
              <InformationCircleIcon className="h-8 w-8 text-btn  opacity-75 " />
            </Link>
          </span>
        </div>

        <img
          src={url}
          alt="menu"
          className="object-cover scale-100 w-40 h-40  rounded-full -ml-48 -mt-14"
        />

        <button onClick={agregarCarrito} className="absolute top-0 right-0  p-[1.5px] rounded-full bg-whiteC  text-whiteC hover:text-whiteC focus:outline-none focus:ring-2 focus:ring-white  focus:ring-offset-gray-800">
          <ShoppingCartIcon className="  h-8 w-8 rounded-full bg-shopcar text-whiteC p-1   " />
        </button>
      </div>
    </div>
  );
};
