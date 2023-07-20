import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoutes from "./components/PrivateRoutes";
// import { UserContextProvider } from "./contexts/UserContext";

import "./App.css";

function App() {
  return (
    // <UserContextProvider>
    <main className="App">
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={<PrivateRoutes authorizedRoles={["admin", "user"]} />}
        />
      </Routes>
    </main>
    // </UserContextProvider>
  );
}

export default App;
