import axios from 'axios';

// extraer los datos de la api rest
export const apiRest = function(url: string) {
    return axios.get(url)
}