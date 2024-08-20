import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPetDetails from "./fetchPetDetails";
import Carousel from "./Carousel";
import { useDispatch } from "react-redux";
import { popupReduxActions } from "./redux/slices/popup-slice";

const Details = () => {
  const { petId } = useParams();
  const dispatch = useDispatch();
  const results = useQuery(["detailsCachingKey", petId], fetchPetDetails);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐶 🐣 🐰</h2>
      </div>
    );
  }
  const pet = results.data.pets[0]; //msh fahmhaa!

  const adoptClickHandler = () => {
    if (pet?.animal === "dog") {
      // show success message
      dispatch(
        popupReduxActions.showPopup({
          type: "success",
          message: "Pet adopted successfully!",
        }),
      );
    } else {
      dispatch(
        popupReduxActions.showPopup({
          type: "error",
          message: "You can only adopt dogs!",
        }),
      );
    }
  };

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
      </div>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
      </h2>
      <button onClick={adoptClickHandler}>Adopt {pet.name}</button>
      <p>{pet.description}</p>
    </div>
  );
};

export default Details;
