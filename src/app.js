const pet = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  );
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", null, "Adopt Me!"),
    React.createElement(pet, {
      name: "Max",
      animal: "Dog",
      breed: "Golden Retriever",
    }),
    React.createElement(pet, {
      name: "Lily",
      animal: "Cat",
      breed: "Persian",
    }),
    React.createElement(pet, {
      name: "koko",
      animal: "bird",
      breed: "cocktail",
    }),
  );
};
const container = document.getElementById("root");
const root = ReactDom.createRoot("container");
root.render(React.createElement(App));
