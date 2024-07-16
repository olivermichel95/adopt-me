import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            location={`${pet.city}, ${pet.state}`}
            breed={pet.breed}
            images={pet.images}
            key={pet.id}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
