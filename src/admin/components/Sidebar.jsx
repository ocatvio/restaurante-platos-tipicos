import { NavLink } from "react-router-dom";

import {
  ChartPieIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
  UsersIcon,
  DocumentArrowDownIcon,
  ArrowLeftOnRectangleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { AuthContext } from "../../auth";

const menu = [
  {
    title: "Estadisticas",
    tor: "/dashboard",
    icono: <ChartPieIcon className="w-6 h-6" />,
    gap: true,
  },
  {
    title: "Compras",
    tor: "/shop",
    icono: <ShoppingCartIcon className="w-6 h-6" />,
  },
  { title: "Usuarios", to: "/users", icono: <UsersIcon className="w-6 h-6" /> },
  {
    title: "productos",
    tor: "/product",
    icono: <DocumentArrowDownIcon className="w-6 h-6" />,
  },
  {
    title: "configuracions",
    tor: "/configuracion",
    icono: <Cog6ToothIcon className="w-6 h-6" />,
  },
];

export const Sidebar = () => {
  const [response, setResponse] = useState(true);

  const {logout} = useContext(AuthContext);

  const responseDashboar = () => {
    setResponse(!response);
  };


  const salir = () => {
    const lastPath = localStorage.getItem('lastPath')

    logout()
  }

  return (
    <div className="flex bg-whiteC">
      <div
        className={` ${
          response ? "w-64" : "w-20"
        } duration-300 h-screen shadow-xl relative p-5 pt-6    rounded dark:bg-gray-800`}
      >
        <ArrowLeftCircleIcon
          onClick={responseDashboar}
          className={`absolute w-6 h-6 cursor-pointer -right-3 top-7 text-hover-text bg-fondo rounded-full ${
            !response && "rotate-180"
          }`}
        />

        <div className="flex gap-x-4 items-center">
          <div>
            <img
              src="https://c.tenor.com/5Jc-2qvQCx4AAAAi/wedang-pokak-cup.gif"
              alt="logo"
              className={`block w-8 h-8 duration-500 ${
                !response && "rotate-[360deg]"
              }`}
            />
          </div>

          <h1
            className={` origin-left font-medium text-xl duration-300 ${
              !response && "scale-0"
            }`}
          >
            Administrador
          </h1>
        </div>
        <ul className="pt-6 ">
          {menu.map((item) => (
            <NavLink
              to={item.tor}
              key={item.title}
              className={`shadow-md   flex items-center p-2 my-8 text-sm font-normal duration-300 text-gray5 gap-x-4 rounded-lg dark:text-white hover:bg-fondoCard2 cursor-pointer  dark:hover:bg-gray-700  ${
                item.gap ? "mt-20 " : "mt-2"
              }`}
            >
              {item.icono}
              <p
                className={`${!response && "hidden origin-left duration-300"}`}
              >
                {item.title}
              </p>{" "}
            </NavLink>
          ))}
          <li className="mt-24 ">
            <NavLink
              onClick={salir}
              className=" shadow-md  flex items-center p-2 my-4 text-sm font-normal duration-300 text-gray5 gap-x-1 rounded-lg dark:text-white hover:bg-fondoCard2 cursor-pointer  dark:hover:bg-gray-700 "
            >
              <ArrowLeftOnRectangleIcon
                aria-hidden="true"
                className='className="w-7 h-7 text-gray5  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20"'
              ></ArrowLeftOnRectangleIcon>
              <span className="flex-1 text-lg">salir</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
