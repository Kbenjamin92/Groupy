import { useState, createContext, useContext} from 'react'

interface AuthContextType {
  isAuthenticated: boolean,
  login: () => void,
  logout: () => void
}
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error('useAuth must be used within an AuthProvider')
  }
  return context;
}