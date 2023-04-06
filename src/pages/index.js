import { useEffect, useState } from "react";
import { handleBreeds } from "../entities/breeds";
import { getBreeds, getRanomImage } from "../services/breeds";

export default function Home({ breedList }) {
  const [currentImg, setCurrentImg] = useState();

  const breedsImage = async (breed) => {
    let currentBreed = breed;
    const splittedArray = currentBreed.split(" ");
    if (splittedArray[1]) {
      currentBreed = splittedArray.reverse().join("/");
    }
    const randomImage = await getRanomImage(currentBreed);
    setCurrentImg(randomImage.message);
  };

  const handleBreedsOptions = async (e) => {
    breedsImage(e.target.value);
  };

  useEffect(() => {
    breedsImage(breedList[0]);
  }, []);

  if (breedList.length) {
    return (
      <>
        <select name="breeds" id="breeds" onChange={handleBreedsOptions}>
          {breedList?.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <img src={currentImg} />
      </>
    );
  } else {
    return <p>carregando...</p>;
  }
}

export async function getStaticProps() {
  const getBreedsResponse = await getBreeds();
  const breedList = handleBreeds(getBreedsResponse);

  return {
    props: { breedList },
  };
}
