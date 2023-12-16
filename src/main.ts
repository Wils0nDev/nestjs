import './style.css'
// import { setupCounter } from './counter.ts'
// import { name,age} from "./bases/01-types.ts";
// import { pokemons} from "./bases/02-objects-y-arreglos.ts";
// import { charmander } from './bases/03-classes.ts';
// import { charmander } from './bases/04-injections';
// import { charmander } from './bases/05-decoradores';
import { charmander } from './bases/06-decorators2';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1> Hola ${charmander.name} </h1>
  </div>
`

