const fetchPetDetails = async ({ queryKey }) => {
  const [_, petId] = queryKey;
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${petId}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default fetchPetDetails;
