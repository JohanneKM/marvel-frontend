import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const comicsTab = [];
  const [selectedCharacter, setSelectedCharacter] = useState("");

  // pour la search bar
  const [search, setSearch] = useState("");
  console.log(search);

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
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <div className="container-characters">
        {data.results.map((character) => {
          return (
            <Link
              to="/comics/:id"
              key={character.name}
              onClick={() => {
                setSelectedCharacter(character._id);
                console.log(selectedCharacter);
                for (let i = 0; i < character.comics.length; i++) {
                  comicsTab.push(character.comics[i]);
                }

                // console.log(comicsTab);
              }}
              state={{
                comicsTab: comicsTab,
                selectedCharacter: selectedCharacter,
              }}
            >
              <div className="one-character">
                <img
                  src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
                  alt=""
                />

                <div className="one-character-text">
                  <p>{character.name}</p>
                  <p>{character.description}</p>
                  <p>{character._id}</p>
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
