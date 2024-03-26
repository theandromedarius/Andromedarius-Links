import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import icon from "./assets/icon.jpg";
import durabilityPingThumb from "./assets/thumbnails/durability-ping.png";
import coordinatesHudThumb from "./assets/thumbnails/coordinates-hud.png";
import dayAndEntityCounterThumb from "./assets/thumbnails/day-and-entity-counter.png";

const links = [
  {
    id: "/",
    title: "Andromedarius Download Pages",
    image: icon,
    links: [
      {
        name: "Coordinates HUD",
        url: "/download/coordinates-hud",
      },
      {
        name: "Durability Ping!",
        url: "/download/durability-ping",
      },
      {
        name: "Day & Entity Counter",
        url: "/download/day-and-entity-counter",
      },
    ],
  },
  {
    id: "/download/durability-ping",
    title: "Durability Ping!",
    image: durabilityPingThumb,
    links: [
      { name: "LootLabs [MCPACK]", url: "https://loot-link.com/s?oS9t", },
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
      {
        name: "Home",
        url: "/",
      },
    ],
  },
  {
    id: "/download/coordinates-hud",
    title: "Coordinates HUD",
    image: coordinatesHudThumb,
    links: [
      {
        name: "LootLabs",
        url: "",
      },
      {
        name: "Linkvertise",
        url: "https://direct-link.net/845273/coordinates-hud-for-beta",
      },
      {
        name: "Home",
        url: "/",
      },
    ],
  },
  {
    id: "/download/day-and-entity-counter",
    title: "Day & Entity Counter",
    image: dayAndEntityCounterThumb,
    links: [
      {
        name: "LootLabs",
        url: "",
      },
      {
        name: "Linkvertise",
        url: "https://link-target.net/845273/dayentitycounter-for-beta",
      },
      {
        name: "Home",
        url: "/",
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
            path={prop.id}
            element={<Main props={prop} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
