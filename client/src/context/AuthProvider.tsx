import { useState, createContext } from 'react'
import { AuthContextType, AuthProviderProps } from '@/interfaces';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        { children }
      </AuthContext.Provider>
    </>
  )
}
