import React from "react";
import ReactDom from "react-dom";
import Pet from "./Pet";

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
      <Pet name="Max" animal="Dog" breed="Golden Retriever" />
      <Pet name="Lily" animal="Cat" breed="Persian" />
      <Pet name="Koko" animal="Bird" breed="Cocktail" />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(React.createElement(App));
