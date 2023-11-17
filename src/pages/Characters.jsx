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
  const skip = (currentPage - 1) * resultsPerPage;
  console.log("skip ==>", skip);

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
      <input
        placeholder="Search"
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <Pagination
        nbPages={nbPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
                  </div>
                </div>
              </Link>

              <input type="checkbox" />
            </div>

            // {/* <div className="test">
            //   {character.comics.map((comic, index) => {
            //     return <p key={index}>{comic}</p>;
            //   })}
            // </div> */}
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
