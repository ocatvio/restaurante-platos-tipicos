import { Fragment, useContext, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { v4 as uuid } from "uuid";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ShoppingBagIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { AuthContext } from "../../auth/context/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShoppinCar } from "../../restaurant/components/ShoppinCar";
import { PedidoCard } from "../../restaurant/components/PedidoCard";
import { RestContext } from "../../restaurant/context/RestContext";

const navigations = [
  { name: "Home", href: "/", current: true },
  { name: "Menu", href: "menu", current: false },
  { name: "Pedidos", href: "pedidos", current: false },
  { name: "Sobre nosotros", href: "about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const { cars, addPedido, vaciarCar } = useContext(RestContext);

  const [subtotal, setSubTotal] = useState(0);

  useEffect(() => {
    let aux = 0;

    cars.forEach((element) => {
      aux = parseInt(element.price) + aux;
    });

    setSubTotal(aux);
  }, [cars]);

  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  const lastPath = pathname + search;

  const onLogout = () => {
    localStorage.setItem("lastPath", lastPath);

    navigate("/login", { replace: true });

    logout();
  };

  const onAddPedido = () => {
    const id = uuid();
    addPedido(cars,id);

    vaciarCar();
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://c.tenor.com/5Jc-2qvQCx4AAAAi/wedang-pokak-cup.gif"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://c.tenor.com/5Jc-2qvQCx4AAAAi/wedang-pokak-cup.gif"
                    alt="Your Company"
                  />
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigations.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className=" relative  ml-3 ">
                  <div>
                    <Menu.Button className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">View notifications</span>
                      <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                      <span className="top-2 animate-bounce hover:animate-none absolute  w-4 h-4 font-medium text-xs inline bg-btn border-white dark:border-gray-800 rounded-full  text-whiteC">
                        {cars.length}
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="animate__animated animate__fadeIn   absolute lg:right-0 -right-12  z-50 mt-2 w-auto origin-top-right rounded-md bg-whiteC py-1 shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 "
                            )}
                          >
                            <h2 className="font-semibold text-center py-6">
                              Carrito de compras
                            </h2>
                            <div className="overflow-y-auto h-[40vh]">
                              {cars.map((plato) => (
                                <PedidoCard key={plato.id} {...plato} />
                              ))}
                            </div>

                            <div className="border-t  border-fondoCard2  py-6 px-4 sm:px-6">
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${subtotal}</p>
                              </div>
                              <p className="mt-0.5 text-sm text-gray-500">
                                Detalle de tu carrito de compras.
                              </p>
                              <div className="mt-6">
                                <button
                                  onClick={onAddPedido}
                                  className="flex items-center justify-center rounded-full  border-transparent bg-btn px-6 py-3 text-base font-medium text-whiteC shadow-sm hover:bg-indigo-700"
                                >
                                  Ordenar pedido
                                </button>
                              </div>
                              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                  or
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => setOpen(false)}
                                  >
                                    Continuar Comprando
                                    <span aria-hidden="true"> &rarr;</span>
                                  </button>
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  onClick={onLogout}
                  className="lg:ml-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 "
                >
                  <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigations.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
