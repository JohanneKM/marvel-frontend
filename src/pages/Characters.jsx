import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--j7xsyk95scmh.code.run/characters"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="container">
      <div className="container-characters">
        {data.results.map((character) => {
          return (
            <div className="one-character" key={character.name}>
              <img
                src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
                alt=""
              />

              <div className="one-character-text">
                <p>{character.name}</p>
                <p>{character.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
