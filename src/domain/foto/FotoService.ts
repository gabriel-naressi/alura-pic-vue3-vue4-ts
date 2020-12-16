import axios, { AxiosResponse } from 'axios';
import { Foto } from './Foto';

export default class FotoService {
    listar(): Promise<AxiosResponse<Foto[]>> {
        return axios.get('http://localhost:3000/v1/fotos');
    }
}