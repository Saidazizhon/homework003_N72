import { useAuth } from "../auth/AuthContext"; // AuthContext'ni import qilish
import { Navigate } from "react-router-dom";  // Foydalanuvchini yo'naltirish uchun

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // AuthContext'dan foydalanuvchi ma'lumotini olish

  // Agar foydalanuvchi tizimga kirmagan bo‘lsa, login sahifasiga yo'naltiradi
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
