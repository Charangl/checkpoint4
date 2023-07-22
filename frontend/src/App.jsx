import { Routes, Route } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import RabbitListRepro from "./pages/RabbitListRepro";
import RabbitListBaby from "./pages/RabbitListBaby";
import RabbitDetails from "./pages/RabbitDetails";
import WritingList from "./pages/WritingList";
// import WritingDetails from "./pages/WritingDetails";
import PrivateRoutes from "./components/PrivateRoutes";
import Gestion from "./pages/Gestion";
// import { UserContextProvider } from "./contexts/UserContext";

import "./App.css";

function App() {
  return (
    // <UserContextProvider>
    <main>
      <Grid
        templateColumns={{ base: "0rem 1fr", md: "15rem 1fr" }}
        minH={{ md: "100vh" }}
      >
        <GridItem>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              width: "56px",
            }}
          >
            <Navbar />
          </div>
        </GridItem>
        <GridItem>
          <div
            style={{ overflowY: "scroll", height: "100vh", padding: "20px" }}
          >
            <Name />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/repro" element={<RabbitListRepro />} />
              <Route path="/baby" element={<RabbitListBaby />} />
              <Route path="/rabbits/:id" element={<RabbitDetails />} />
              <Route path="/writingList" element={<WritingList />} />
              {/* <Route path="/writings/:id" element={<WritingDetails />} /> */}
              <Route path="/name" element={<Name />} />
              <Route
                path="/"
                element={<PrivateRoutes authorizedRoles={["admin"]} />}
              >
                <Route path="/gestion" element={<Gestion />} />
              </Route>
            </Routes>
          </div>
        </GridItem>
      </Grid>
    </main>
    // </UserContextProvider>
  );
}

export default App;
