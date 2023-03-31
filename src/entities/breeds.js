export const handleBreeds = (getBreedsResponse) => {
  const breedList = getBreedsResponse?.message;
  const breeds = Object.keys(breedList);
  const allBreeds = [];

  breeds.forEach((breedName) => {
    if (!breedList[breedName].length) {
      allBreeds.push(breedName);
    } else {
      breedList[breedName].forEach((subBreed) => {
        allBreeds.push(`${subBreed} ${breedName}`);
      });
    }
  });

  const allBreedsAlphabeticallySorted = allBreeds.sort((a, b) =>
    a.localeCompare(b)
  );

  return allBreedsAlphabeticallySorted;
};
