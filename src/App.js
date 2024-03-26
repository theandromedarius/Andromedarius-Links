import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import icon from "./assets/icon.jpg";
import durabilityPingThumb from "./assets/thumbnails/durability-ping.png";
import coordinatesHudThumb from "./assets/thumbnails/coordinates-hud.png";
import dayAndEntityCounterThumb from "./assets/thumbnails/day-and-entity-counter.png";
import biomeCheckThumb from "./assets/thumbnails/biome-check.png";
import tradeUnlockerThumb from "./assets/thumbnails/trade-unlocker.png";
import visualizeEnchantedBookThumb from "./assets/thumbnails/visualize-enchanted-book.png";
import circularHotbarThumb from "./assets/thumbnails/circular-hotbar.jpg";
import verticalHotbarThumb from "./assets/thumbnails/vertical-hotbar.png";
import caveAndCliffStartAnimationThumb from "./assets/thumbnails/cave-and-cliff-start-animation.png";
import subtitleThumb from "./assets/thumbnails/subtitle.png";

const links = [
  {
    id: "/",
    title: "Andromedarius Download Pages",
    image: icon,
    links: [
      { name: "Coordinates HUD", url: "/download/coordinates-hud", },
      { name: "Durability Ping!", url: "/download/durability-ping", },
      { name: "Day & Entity Counter", url: "/download/day-and-entity-counter", },
      { name: "Biome Check", url: "/download/biome-check", },
      { name: "Trade Unlocker", url: "/download/trade-unlocker", },
      { name: "Visualize Enchanted Book", url: "/download/visualize-enchanted-book", },
      { name: "Circular Hotbar", url: "/download/circular-hotbar", },
      { name: "Vertical Hotbar", url: "/download/vertical-hotbar", },
      { name: "Cave & Cliff Start Animation", url: "/download/cave-and-cliff-start-animation", },
      { name: "Subtitle", url: "/download/subtitle", },
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
        variant: "link-button-destructive"
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
        variant: "link-button-destructive"
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
        variant: "link-button-destructive"
      },
    ],
  },
  
  {
    id: "/download/biome-check",
    title: "Biome Check",
    image: biomeCheckThumb,
    links: [
      {
        name: "LootLabs",
        url: "",
      },
      {
        name: "Linkvertise",
        url: "https://link-center.net/845273/biome-check-for-beta",
      },
      {
        name: "Home",
        url: "/",
        variant: "link-button-destructive"
      },
    ],
  },

  {
    id: "/download/trade-unlocker",
    title: "Trade Unlocker",
    image: tradeUnlockerThumb,
    links: [
      {
        name: "LootLabs",
        url: "",
      },
      {
        name: "Linkvertise",
        url: "https://link-hub.net/845273/trade-unlocker",
      },
      {
        name: "Home",
        url: "/",
        variant: "link-button-destructive"
      },
    ],
  },

  {
    id: "/download/visualize-enchanted-book",
    title: "Visualize Enchanted Book",
    image: visualizeEnchantedBookThumb,
    links: [
      {
        name: "LootLabs",
        url: "",
      },
      {
        name: "Linkvertise [MCPACK]",
        url: "https://link-hub.net/845273/veb-v102-mcpack",
      },
      {
        name: "Linkvertise [ZIP]",
        url: "https://direct-link.net/845273/veb-v102-zip",
      },
      {
        name: "Java Version",
        url: "https://www.curseforge.com/minecraft/texture-packs/xalis-enchanted-books",
      },
      {
        name: "Home",
        url: "/",
        variant: "link-button-destructive"
      },
    ],
  },

  {
    id: "/download/circular-hotbar",
    title: "Circular Hotbar",
    image: circularHotbarThumb,
    links: [
      {
        name: "LootLabs [MCPACK]",
        url: "https://lootdest.com/s?qrJ7",
      },
      {
        name: "LootLabs [ZIP]",
        url: "https://loot-link.com/s?qrJ9",
      },
      {
        name: "Linkvertise [MCPACK]",
        url: "https://link-target.net/845273/circular-hotbar-mcpack",
      },
      {
        name: "Linkvertise [ZIP]",
        url: "https://link-center.net/845273/circular-hotbar-zip",
      },
      {
        name: "Home",
        url: "/",
        variant: "link-button-destructive"
      },
    ],
  },

  {
    id: "/download/vertical-hotbar",
    title: "Vertical Hotbar",
    image: verticalHotbarThumb,
    links: [
      {
        name: "LootLabs",
        url: "",
      },
      {
        name: "Linkvertise",
        url: "https://direct-link.net/845273/vertical-hotbar",
      },
      {
        name: "Home",
        url: "/",
        variant: "link-button-destructive"
      },
    ],
  },

  {
    id: "/download/cave-and-cliff-start-animation",
    title: "Cave & Cliff Sart Animation",
    image: caveAndCliffStartAnimationThumb,
    links: [
      {
        name: "LootLabs",
        url: "https://loot-link.com/s?p4j4",
      },
      {
        name: "Linkvertise",
        url: "https://link-center.net/845273/cave-and-cliff-start-anim",
      },
      {
        name: "Home",
        url: "/",
        variant: "link-button-destructive"
      },
    ],
  },

  {
    id: "/download/subtitle",
    title: "Subtitle",
    image: subtitleThumb,
    links: [
      {
        name: "LootLabs",
        url: "",
      },
      {
        name: "Linkvertise [MCPACK]",
        url: "https://link-center.net/845273/subtitle-mcpack",
      },
      {
        name: "Linkvertise [ZIP]",
        url: "https://link-center.net/845273/subtitle-zip",
      },
      {
        name: "Home",
        url: "/",
        variant: "link-button-destructive"
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
