import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAxiosAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

//Inyección de Dependencia : Es inyectar una dependencia a mi clase 
                            //para evitar que mi clase tenga toda la funcionalidad interna 
                            //Es decir mi clase de Pokemon tiene como objetivo manejar sus acciones, pero adicional a ello
                            //maneja dependencias de otras clases, esto nos permite por ejemplo:
                            // Queremos hacer peticiones a un Servicio externo desde nuestra clase Pokemoin, 
                            //entonces inyectamos una clase que tendra implementado fetch
                            //Pero digamos que en un futuro queremos usar Axios, para esto no modificaremos nuestra clase Pokemon, si no 
                            //solo modificaremos la clase donde se implemento fetch y esto hará el cambio en todas las clases que se haya inyectado
                        
export class Pokemon {
    
    //readonly : nos dice que el atirbuto solo sera de lectura
    constructor(
        public readonly id:number,
        public name:string,
        public readonly http:HttpAdapter
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
            const data = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
            console.log(data.moves)
            return data.moves
        }

        


}
//una vez implementado la inyeccion de dependencia, podemos usar cualquier clase para 
//hacer nuestra petición get
const pokeApiAxios = new PokeApiAxiosAdapter()
const pokeApiFetch = new PokeApiFetchAdapter()
export const charmander = new Pokemon(1,'Charmander',pokeApiAxios)
console.log(charmander.getMoves())

