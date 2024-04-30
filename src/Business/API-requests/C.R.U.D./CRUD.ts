/* eslint-disable padded-blocks */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import axios, { AxiosRequestConfig } from 'axios';
import { AuthResponse, CreatePostPayload, Img, ImgPopulatableKeys, Post, PostPopulatableKeys } from '../../../Types-Interfaces/CRUD.types';

const CRUD = {

    auth: async (data: any) => {

        try {
            const response = await axios.post<AuthResponse>(`${import.meta.env.VITE_API_HOST}/auth`, data);
            console.log('CRUD==>', { response });

            return response;
        } catch (error) {
            console.error(error);
        }
    },

    post: async (route: any, data: any) => {
        const response = await axios.post(`${import.meta.env.VITE_API_HOST}/${route}`, data);

        if (response.status === 200) {
            return response;
        }
    },
//TODO: error-type ==> headers???
    postForm: async (route: string, data: CreatePostPayload, headers: AxiosRequestConfig['headers']) => {
        const response = await axios.postForm(`${import.meta.env.VITE_API_HOST}/${route}`, data, headers);

        if (response.status === 200) {
            return response;
        }
    },

    getForm: async (route: string, params?: { populate?: PostPopulatableKeys[] | ImgPopulatableKeys[], type?: string }) => {
        const response = await axios.get<Post | Post[] | Img | Img[]>(`${import.meta.env.VITE_API_HOST}/${route}`, { params });

        if (response.status === 200) {
            return response.data;
        }
    },
    getPost: async (route: string, params?: { populate?: PostPopulatableKeys[] | ImgPopulatableKeys[], type?: string }) => {
        const response = await axios.get<Post | Post[]>(`${import.meta.env.VITE_API_HOST}/${route}`, { params });

        if (response.status === 200) {
            return response.data;
        }
    },

    getImgs: async (route: string) => {
        const response = await axios.get<Img[]>(`${import.meta.env.VITE_API_HOST}/${route}`);
        if (response.status === 200) {
            return response.data;
        }
    },

    patchById: async (route: String, data: any) => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_API_HOST}/${route}`, data);
            if (response.status === 200) {
                return response;
            }
            return response.status;
        } catch (err) {
            console.error(err);
            console.log({ err });
        }
    },

    patchFormById: async (route: string, data: any, headers: AxiosRequestConfig['headers']) => {
        try {
            const response = await axios.patchForm(`${import.meta.env.VITE_API_HOST}/${route}`, data, headers);
            if (response.status === 200) {
                return response;
            }
            return response.status;
        } catch (err) {
            console.error(err);
            console.log({ err });
        }
    },

    deleteFormById: async (route: string) => {
        const response = await axios.delete(`${import.meta.env.VITE_API_HOST}/${route}`);
        if (response.status === 200) {
            return response;
        }
        if (response.status === 401) {
            return response;
        }
    },

};

export default CRUD;
