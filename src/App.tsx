import '@mantine/core/styles.css';
import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import axios from 'axios';
import { Router } from './Router';
import { theme } from './theme';
import { useAuthStore } from './Zustand/authStore';

function App() {
    const token = useAuthStore(state => state.jwt);
    useEffect(() => {
      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      } else {
        console.log('NO Bearer !!!');

        delete axios.defaults.headers.common.Authorization;
      }
    }, [token]);

  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}

export default App;
