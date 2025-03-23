import { createContext, useState, useContext, ReactNode } from "react";

// Definição do tipo do contexto
interface AuthContextType {
  token: string;
  setToken: (token: string) => void;
}

interface UserContextProps {
  children: ReactNode;
}

// Criando o contexto com um valor inicial nulo para evitar problemas de tipagem
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: UserContextProps) => {
  const [token, setToken] = useState<string>("");

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
