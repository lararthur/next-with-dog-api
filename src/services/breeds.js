export const getBreeds = async () => {
  const breedList = await fetch("https://dog.ceo/api/breeds/list/all").then(
    (response) => response.json()
  );
  return breedList;
};
