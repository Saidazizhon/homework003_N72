import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Auth kontekstini yaratish
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Login funksiyasi
  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      setUser({ username });
      navigate("/users"); // Login muvaffaqiyatli bo'lsa, users sahifasiga o'tadi
    } else {
      alert("Login yoki parol noto'g'ri!");
    }
  };

  // Logout funksiyasi
  const logout = () => {
    setUser(null);
    navigate("/"); // Logout bo'lganda login sahifasiga qaytariladi
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Auth kontekstidan foydalanish uchun xok
export const useAuth = () => useContext(AuthContext);
