import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../components/Pagination";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const comicsTab = [];
  const [selectedCharacter, setSelectedCharacter] = useState(
    "5fcf91f4d8a2480017b91454"
  );

  // for the search bar
  const [name, setName] = useState("");
  console.log("name ==> ", name);

  // for the pagination
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const [resultsPerPage] = useState(100);
  const nbPages = Math.ceil(1493 / resultsPerPage);
  console.log("nbPages ===>", nbPages);
  let skip = 0;
  if (name.length !== 0) {
    skip = 0;
  } else {
    skip = (currentPage - 1) * resultsPerPage;
  }
  console.log("skip ==>", skip);

  // for the favourites

  const [favourites, setFavourites] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const saved = localStorage.getItem("testFavourite");
  console.log(saved);

  const addFav = (character) => {
    let array = favourites;
    let addArray = true;
    array.map((elem, index) => {
      if (elem === character) {
        array.splice(index, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(character);
    }

    setFavourite([...array]);
  };

  // for the description length
  const addEllipsis = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--j7xsyk95scmh.code.run/characters?name=${name}&skip=${skip}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [name, currentPage, selectedCharacter]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="container">
      {/* <img
        className="background-image"
        src="../src/assets/img/background.png"
        alt="background"
      />
      <img
        className="background-image"
        src="../src/assets/img/background.png"
        alt="background"
      />
      <img
        className="background-image"
        src="../src/assets/img/background.png"
        alt="background"
      />

      <img
        className="background-image"
        src="../src/assets/img/background.png"
        alt="background"
      />

      <img
        className="background-image"
        src="../src/assets/img/background.png"
        alt="background"
      />

      <img
        className="background-image"
        src="../src/assets/img/background.png"
        alt="background"
      />

      <img
        className="background-image"
        src="../src/assets/img/background.png"
        alt="background"
      />

      <img
        className="background-image"
        src="../src/assets/img/background.png"
        alt="background"
      />

      <img
        className="background-image"
        src="../src/assets/img/background.png"
        alt="background"
      /> */}

      <section className="searchbar-section">
        <div className="searchbar">
          <input
            className="search-bar"
            placeholder="Search your favourite character"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
      </section>

      <div className="container-characters">
        {data.results.map((character) => {
          return (
            <div className="card">
              <Link
                to="/comics/:id"
                key={character._id}
                onClick={() => {
                  console.log(character._id);
                  // setSelectedCharacter(character._id);
                  // console.log(selectedCharacter);
                  for (let i = 0; i < character.comics.length; i++) {
                    comicsTab.push(character.comics[i]);
                  }

                  // console.log(comicsTab);
                }}
                state={{
                  comicsTab: comicsTab,
                  characterID: character._id,
                  characterName: character.name,
                  characterDesc: character.description,
                }}
              >
                <div className="one-character">
                  <img
                    src={`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`}
                    alt=""
                  />

                  <div className="one-character-text">
                    <h2>{character.name}</h2>

                    {/* <p> {addEllipsis(character.description, 50)}</p> */}
                  </div>
                </div>
              </Link>

              <input
                onClick={(event) => {
                  if (event.target.checked) {
                    console.log("Is checked");
                  } else {
                    console.log("Is not checked");
                  }
                  setIsFavourite((current) => !current);
                  localStorage.setItem("testFavourite", character.name);
                }}
                type="checkbox"
              />
            </div>

            // {/* <div className="test">
            //   {character.comics.map((comic, index) => {
            //     return <p key={index}>{comic}</p>;
            //   })}
            // </div> */}
          );
        })}
      </div>

      <Pagination
        nbPages={nbPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Characters;
