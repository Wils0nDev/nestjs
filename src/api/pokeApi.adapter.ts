import axios from 'axios'
//Esta interface nos permitira decirle a nuestras clases
//como es que se debe implementar el metodo y enviar la respuesta
export interface HttpAdapter { 
    get<T>(url:string) : Promise<T>;
}
export class PokeApiFetchAdapter implements HttpAdapter { 

    async get<T>(url:string){

        const response = await fetch(url)
        const data:T = await response.json()
        console.log('esto se hizo con fetch')
        return data;
    }
}
export class PokeApiAxiosAdapter implements HttpAdapter { 

   private readonly axios = axios;

   async get<T>(url:string){

    const {data} = await this.axios.get<T>(url)
    console.log('esto se hizo con axios')
    return data;

    }

    async post(url:string){

    }

    async patch(url:string, data:any){

    }

    async delete(url:string) {

    }
}