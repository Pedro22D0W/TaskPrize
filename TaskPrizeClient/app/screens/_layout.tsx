import { Redirect, Stack } from 'expo-router';
import { AuthProvider, useAuth } from '@/context/AuthContext';

export default function AppLayout() {
  const { token } = useAuth();

  if (!token) {
    return <Redirect href="/login" />;
  }

  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}