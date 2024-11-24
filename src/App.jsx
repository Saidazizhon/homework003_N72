import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
