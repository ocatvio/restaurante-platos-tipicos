import { useReducer } from "react";
import { types } from "../types/types";
import { PedidoReduccer } from "./PedidoReduccer";
import { RestContext } from "./RestContext";
import { RestReduccer } from "./RestReduccer";

const estadoInicial = [];

const estadoPInicial = [
  
];

export const RestProvider = ({ children }) => {
  const [restState, dispatchCar] = useReducer(RestReduccer, estadoInicial);

  const [pedidoState, dispatchPedido] = useReducer(
    PedidoReduccer,
    estadoPInicial
  );

  const vaciarCar = () => {
    const action = {
      type: types.cleanCar,
    };

    dispatchCar(action);
  };
  const addCar = (plato) => {
    const action = {
      type: types.addCar,
      payload: plato,
    };

    dispatchCar(action);
  };

  const removeCar = (id) => {
    console.log(id);
    const action = {
      type: types.removeCar,
      payload: id,
    };

    console.log(action);

    dispatchCar(action);
  };

  // pedidos
  const addPedido = (pedido,id) => {
    
    const action = {
      type: types.addPedido,
      payload: 
        {
          id:id,
          estado:false,
          pedidos:pedido

        }
      
    };

    dispatchPedido(action);
  };

  const removePedido = (id) => {
    console.log(id);
    const action = {
      type: types.removePedido,
      payload: id,
    };

    console.log(action);

    dispatchPedido(action);
  };

  return (
    <RestContext.Provider
      value={{
        ...restState,
        cars: restState,
        vaciarCar: vaciarCar,
        addCar: addCar,
        removeCar: removeCar,
        ...pedidoState,
        addPedido,
        removePedido,
        listPedidos: pedidoState,
      }}
    >
      {children}
    </RestContext.Provider>
  );
};
