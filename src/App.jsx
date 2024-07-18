import React from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PetDetails from "./PetDetails"; // default export

// import AppStudy from "./AppStudy";

// import Pet from "./Pet";

/**
 * Dynamic routing:
 *  lama ykoon 3andy page lyha style sabet bs el content bta3ha bya5talef 3ala 7asab el resource el ana ba3melo show
 */

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/details/:petId" element={<PetDetails />} />
        </Routes>
      </BrowserRouter>
      {/* <Pet name="Max" animal="Dog" breed="Golden Retriever" />
      <Pet name="Lily" animal="Cat" breed="Persian" />
      <Pet name="Koko" animal="Bird" breed="Cocktail" /> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
// root.render(React.createElement(AppStudy));
