import { heroes } from "../data/heroes";



export const getHeroesByPublisher = (publisher) => {
 
    const validPublisher = ['Marvel Comics','DC Comics']

    if(!validPublisher.includes(publisher)){
        return new Error(`${publisher} no existe`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}
