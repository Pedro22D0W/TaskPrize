import { Slot } from 'expo-router';
import { AuthProvider } from '@/context/AuthContext';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <AuthProvider>
        <Slot />
    </AuthProvider>
  );
}