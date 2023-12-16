
export const  pokemonsIds = [1,20,30,34,66]

export interface Pokemon {
    id : number;
    name : string;
    age? : number 
}
export const Bulbasaur : Pokemon = {
    id:1,
    name: 'Bulbasaur',
    age : 10
}
export const Charmander : Pokemon = {
    id:2,
    name: 'Charmander',
    age : 8
}
export const Pikachu : Pokemon = {
    id:3,
    name: 'Pikachu',
    age : 15
}
console.log(Bulbasaur)

export const pokemons : Pokemon[] = [Bulbasaur,Charmander]
pokemons.push(Pikachu)
console.log(pokemons)