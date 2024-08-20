import { useEffect, useState } from "react";
import Results from "./Results";

const animalOptions = [
  { label: "Bird", value: "bird" },
  { label: "Cat", value: "cat" },
  { label: "Dog", value: "dog" },
  { label: "Rabbit", value: "rabbit" },
  { label: "Reptile", value: "reptile" },
];

const Search = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    if (animal) {
      const fetchBreeds = async () => {
        const response = await fetch(
          `https://pets-v2.dev-apis.com/breeds?animal=${animal}`, // animal deh eh bzbt beta3t ehh?
        );
        const result = await response.json();
        setBreeds(result.breeds);
      };

      fetchBreeds();
    }
  }, [animal]);

  const fetchPets = async () => {
    const response = await fetch(
      `https://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}&breed=${selectedBreed}`,
    );
    const result = await response.json();
    setPets(result.pets);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchPets(); // leh gebt deh hena ?
          }}
        >
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            placeholder="Location..."
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="animal">Animals:</label>
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option key={Math.random()} value="">
              Please select an option...
            </option>
            {animalOptions.map((animalObj) => (
              <option value={animalObj.value} key={animalObj.value}>
                {animalObj.label}
              </option>
            ))}
          </select>

          <label htmlFor="breed">Breeds:</label>
          <select
            name="breed"
            id="breed"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
          >
            <option key={Math.random()} value="">
              Please select an option...
            </option>
            {breeds.map((breedName) => (
              <option value={breedName} key={breedName}>
                {breedName}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Results pets={pets} />
    </div>
  );
};

export default Search;
