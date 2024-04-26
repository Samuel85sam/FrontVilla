import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { AuthStore } from '@/Types-Interfaces/Zustand-Types';

const initialUserState = {
    currentUser: null,
    jwt: null,
    isAuthenticated: false,
};

export const useAuthStore = create<AuthStore>()(
    persist(devtools(
        (set, get) => ({
            ...initialUserState,
            addUserData: (newUserData) => set((state) => (
                {
                    currentUser: newUserData.currentUser,
                    jwt: newUserData.jwt,
                    isAuthenticated: true,
                }
            )),
            logout: () => set((state) => (
                { ...initialUserState }
            )),
        })
    ),
        {
            name: 'authStorage',
        })

);
