
//Los decoradores nos permite regresar la definición de una clase y expandirla
const MyDecorator = ()=>{
    return (target: Function)=>{
        console.log(target)
    }
}

//Decoradores: son solo funciones que se usan de la siguiente forma
@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id:number,
        public name:string,
        ) { }

         screm():void{
            console.log(`${this.name.toUpperCase()}!!!`)
            }
        //private : solo se puede usar dentro de la misma clase
         speack():void{
            console.log(`${this.name},${this.name}`)
        }
}

export const charmander = new Pokemon(4,'Charmander')
charmander.screm()
charmander.speack()