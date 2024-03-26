import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";

const links = [
  {
    id: "durability-ping",
    title: "Durability Ping!",
    image: "https://api.mcpedl.com/storage/submissions/102913/100/thumbnail_1-520x245.png",
    links: [
      {
        name: "LootLabs [MCPACK]",
        url: "https://loot-link.com/s?oS9t",
      },
      {
        name: "LootLabs [ZIP]",
        url: "https://lootdest.com/s?oS9y",
      },
      {
        name: "Linkvertise [MCPACK]",
        url: "https://link-target.net/845273/durabilitypingmcpack-new",
      },
      {
        name: "Linkvertise [ZIP]",
        url: "https://direct-link.net/845273/durabilitypingzipnew",
      },
    ],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {links.map((prop) => (
          <Route
            key={prop.id}
            path={`/andromedarius-download/${prop.id}`}
            element={<Main props={prop} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
