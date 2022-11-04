import { types } from "../types/types";




export const RestReduccer = (state, action) => {


    switch (action.type) {

        case types.addCar:
            return [
                ...state,
                action.payload
            ]

        case types.removeCar:
            return state.filter(c => c.id !== action.payload)

        case types.cleanCar:
            return []

        



        default: state
    }
}
