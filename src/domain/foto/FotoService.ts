import axios, { AxiosResponse } from 'axios';
import { Foto } from './Foto';

export default class FotoService {
    listar(): Promise<AxiosResponse<Foto[]>> {
        return axios.get('http://localhost:3000/v1/fotos');
    }
    delete(id: string): Promise<AxiosResponse<number>> {
        return axios.delete(`http://localhost:3000/v1/fotos/${id}`);
    }
    create(picture: Omit<Foto, '_id'>): Promise<AxiosResponse<Foto>> {
        return axios.post("http://localhost:3000/v1/fotos", picture);
    }
}