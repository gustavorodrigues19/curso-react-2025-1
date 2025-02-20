import { createContext, useState, useContext } from "react";

// Cria o context com os seus valores
const AuthContext = createContext({
  user: null,
  handleUser: () => {},
});

// Declara os valores no provider do context
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const handleUser = (input) => {
    setUser(input);
  };

  return (
    <AuthContext.Provider value={{ user, handleUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Lê os valores do context
export const useAuthContext = () => useContext(AuthContext);
