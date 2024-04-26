import { User } from './CRUD.types';

export interface NewUserData {
    currentUser: User['_id'],
    jwt: User['jwt'],
    isAuthenticated: boolean
}

export interface AuthStore {
    logout: any
    currentUser: User['_id'] | null,
    jwt: string | null,
    isAuthenticated: boolean
    addUserData: (newUserData: NewUserData) => void
}
