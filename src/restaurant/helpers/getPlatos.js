import { platos } from "../data/heroes"




export const getPlatos = (category) => {
 
    return  platos.filter(plato => plato.category === category)

}
