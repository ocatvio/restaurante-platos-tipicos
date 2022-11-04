import { platos } from "../data/heroes";



export const getPlatoById = (id) => {
 return platos.find(plato => plato.id === id)
}
