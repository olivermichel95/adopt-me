import React from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
// import AppStudy from "./AppStudy";

// import Pet from "./Pet";
const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", null, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Max",
  //     animal: "Dog",
  //     breed: "Golden Retriever",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Lily",
  //     animal: "Cat",
  //     breed: "Persian",
  //   }),
  //   React.createElement(Pet, {
  //     name: "koko",
  //     animal: "bird",
  //     breed: "cocktail",
  //   }),
  // );
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Max" animal="Dog" breed="Golden Retriever" />
      <Pet name="Lily" animal="Cat" breed="Persian" />
      <Pet name="Koko" animal="Bird" breed="Cocktail" /> */}
      <Search />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
// root.render(React.createElement(AppStudy));
