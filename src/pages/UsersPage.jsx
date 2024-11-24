import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const { logout } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Foydalanuvchilarni olishda xatolik:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Foydalanuvchilar</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-md rounded p-4 border border-gray-200"
          >
            <h2 className="text-lg font-semibold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
