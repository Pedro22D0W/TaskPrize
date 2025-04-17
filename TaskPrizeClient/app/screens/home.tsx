import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { Text } from 'react-native';



export default function home() {
  const { token } = useAuth();
   useEffect(() => {
      console.log("Token atualizado no contexto:", token);
      if (token) {
        console.log("foi:", token);
      }
    }, [token]);
}
