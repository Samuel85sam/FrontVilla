/* eslint-disable max-len */
import axios, { AxiosRequestConfig } from 'axios';
import { CreatePostPayload } from './Types-Interfaces/CRUD.types';

const postForm = async (route: string, data: CreatePostPayload, headers: AxiosRequestConfig<any> | undefined) => {
    const formData = new FormData();
    // Ajoutez les données de votre payload
    Object.keys(data).forEach(key => {
        if (key === 'img') {
            // Si 'img' est présent dans les données, traitez-le comme un fichier et ajoutez-le à FormData
            if (data.img) {
                formData.append('img', data.img as Blob);
            }
        } else {
            formData.append(key, (data as any)[key]);
        }
    });

    // Effectuez la requête POST avec FormData et les en-têtes
    const response = await axios.post(`${import.meta.env.VITE_API_HOST}/${route}`, formData, headers);

    if (response.status === 200) {
        return response;
    }
};
