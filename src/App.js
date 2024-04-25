import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import DownloadFile from "./components/DownloadFile";
import Files from "./components/Files";
import Links from "./components/Links";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {Files.map((prop) => (
            <Route
              key={prop.id}
              path={prop.id}
              element={<DownloadFile props={prop} />}
            />
          ))}
          {Links.map((prop) => (
            <Route
              key={prop.id}
              path={prop.id}
              element={<Main props={prop} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
