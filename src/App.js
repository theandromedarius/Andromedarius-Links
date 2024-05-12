import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import DownloadFile from "./components/DownloadFile";
import RedirectLink from "./components/RedirectLink";
import Files from "./components/Files";
import Links from "./components/Links";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path={"/redirect/353e7946-e9f8-4e84-a9a9-4d4885b2ebf1"}
            element={<RedirectLink />}
          />
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
