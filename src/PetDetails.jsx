import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PetDetails = () => {
  /**
   * {
   *    petId: 3,
   * }
   */
  const { petId } = useParams(); // object destructuring

  const [pet, setPet] = useState();

  // mayenfa3sh t3mel el function bta3et el useEffect as an async function
  useEffect(() => {
    if (petId) {
      // el code el hena hay run b3d ma el component y5alas el rendering bta3o
      const fetchPet = async () => {
        const response = await fetch(
          `https://pets-v2.dev-apis.com/pets?id=${petId}`,
        );
        const fetchedPet = await response.json();

        if (
          fetchedPet &&
          typeof fetchedPet === "object" &&
          "pets" in fetchedPet
        ) {
          setPet(fetchedPet.pets.length > 0 ? fetchedPet.pets[0] : undefined);
        }
      };

      fetchPet();
    }
  }, [petId]);

  return <h3>In pet details</h3>;
};

export default PetDetails;
