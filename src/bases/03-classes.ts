import axios from 'axios'
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
    
    //readonly : nos dice que el atirbuto solo sera de lectura
    constructor(
        public readonly id:number,
        public name:string,
        ) { }

        get imageUrl() : string{
            //this -> dentro de una clase apunta a la instancia de nuestra clase
            return `https//pokemon.com/${this.id}.jpg`
        }

        public screm():void{
            console.log(`${this.name.toUpperCase()}!!!`)
            this.speck();
        }
        //private : solo se puede usar dentro de la misma clase
        private speck():void{
            console.log(`${this.name},${this.name}`)
        }

        //async usamos para nuestros metodos asincronos
       async  getMoves():Promise<Move[]>{ //getMoves ahora retorna una Promesa
            const {data} = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
            return data.moves
        }

        


}

export const charmander = new Pokemon(1,'Charmander')
//charmander.id = 2 //error, ide no se puede cambiar
charmander.name = 'Charmilion' //si se puede modificar
console.log(charmander)
console.log(charmander.screm())
charmander.getMoves()
.then((d:number)=>console.log(d))
.catch((error) => {
    console.error(error);
  })
console.log(  charmander.getMoves() )

//console.log(charmander.speck()) //no se puede llamar porque es privado