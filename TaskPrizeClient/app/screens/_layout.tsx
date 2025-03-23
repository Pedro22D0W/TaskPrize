import { Redirect, Stack } from 'expo-router';
import { AuthProvider, useAuth } from '@/context/AuthContext';

export default function AppLayout() {
  const { token } = useAuth();

  if (!token) {
    return <Redirect href="/login" />;
  }

  return (
    <AuthProvider>
      {/* A partir daqui, todos os componentes terão acesso ao contexto de autenticação */}
      <Stack />
    </AuthProvider>
  );
}