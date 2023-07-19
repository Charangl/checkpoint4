import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoutes from "./components/PrivateRoutes";

import "./App.css";

function App() {
  return (
    <main className="App">
      <Home />

      <Routes>
        <Route
          path="/"
          element={<PrivateRoutes authorizedRoles={["admin", "user"]} />}
        />
      </Routes>
    </main>
  );
}

export default App;
