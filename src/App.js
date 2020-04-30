import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./routes/Routers";
import DynamicTicker from "./components/DynamicTicker";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  toast.configure();

  return (
    <>
      <Router>
        <div
          style={{
            color: "#444444",
            backgroundColor: "#FFFAFA",
            boxShadow: "2px 3px 10px #9E9E9E",
          }}
        >
          <Navigation />
          <DynamicTicker />
        </div>
        <Routers />
      </Router>
    </>
  );
}

export default App;
