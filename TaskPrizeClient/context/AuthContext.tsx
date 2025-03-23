import { createContext, useState, useContext, ReactNode } from "react";

// Definição do tipo do contexto
interface AuthContextType {
  token: string | null; // ✅ Agora aceita null
  setToken: (token: string | null) => void; // ✅ Agora podemos limpar o token
}

interface UserContextProps {
  children: ReactNode;
}

// Criando o contexto com um valor inicial nulo para evitar problemas de tipagem
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: UserContextProps) => {
  const [token, setToken] = useState<string | null>(null);;

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
