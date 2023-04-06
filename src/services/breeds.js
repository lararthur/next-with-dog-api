export const getBreeds = async () => {
  const breedList = await fetch("https://dog.ceo/api/breeds/list/all").then(
    (response) => response.json()
  );
  return breedList;
};

export const getRanomImage = async (breed) => {
  const randomImage = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  ).then((response) => response.json());
  return randomImage;
};
