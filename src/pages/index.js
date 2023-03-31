import { handleBreeds } from "../entities/breeds";
import { getBreeds } from "../services/breeds";

export default function Home({ breedList }) {
  if (breedList.length) {
    return (
      <>
        <select name="breeds" id="breeds">
          {breedList?.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </>
    );
  } else {
    return <p>carregando...</p>;
  }
}

export async function getServerSideProps(context) {
  const getBreedsResponse = await getBreeds();
  const breedList = handleBreeds(getBreedsResponse);

  return {
    props: { breedList },
  };
}
