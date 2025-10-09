import { createContext, useReducer, useContext } from "react";

const AuthContext = createContext();

const initialState = { user: null, token: null, isAuthenticated: false };

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.user, token: action.payload.token, isAuthenticated: true };
    case "LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
