import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [characterComics, setCharacterComics] = useState([]);
  // console.log(characterComics);
  const tabTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // console.log(tabTest);
  const comicsTab = [];

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
            <Link
              to="/character/comics"
              key={character.name}
              onClick={() => {
                for (let i = 0; i < character.comics.length; i++) {
                  comicsTab.push(character.comics[i]);
                }

                // console.log(comicsTab);
              }}
              state={{ comicsTab: comicsTab }}
            >
              <div className="one-character">
                <img
                  src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
                  alt=""
                />

                <div className="one-character-text">
                  <p>{character.name}</p>
                  <p>{character.description}</p>
                </div>
              </div>

              <div className="test">
                {character.comics.map((comic, index) => {
                  return <p key={index}>{comic}</p>;
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
