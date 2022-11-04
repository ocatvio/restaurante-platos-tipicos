import { types } from "../types/types";

 export const PedidoReduccer = (state,action) => {

    switch (action.type) {
        case types.addPedido:
             return [...state,action.payload]

        case types.removeCar:
            return {...state,pedidos:pedidos.filter(p => p.id !== payload.id)}
    
        default:
            state;
    }

}
