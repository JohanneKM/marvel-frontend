import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CharacterComics = () => {
  const location = useLocation();
  const { comicsTab, characterID, characterName, characterDesc } =
    location.state;
  // console.log(comicsTab);
  console.log(characterID);
  console.log(characterName);
  console.log(characterDesc);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--j7xsyk95scmh.code.run/comics/${characterID}`
        );
        // console.log(response.data);
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
      <div className="flex-parent">
        {/* <h1>{characterName}</h1> */}
        {/* {comicsTab.map((elem) => {
        return <p key={elem}>{elem}</p>;
      })} */}
        <div className="characterComics-left">
          <img
            src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}
            alt="character"
          />
        </div>

        <div className="characterComics-right">
          <h1> {characterName}</h1>
          <h2> {characterDesc}</h2>
          <div className="comics">
            {data.comics.map((comic, index) => {
              return (
                <div key={index} className="one-characterComics">
                  {/* <img
                    src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                    alt="comic"
                  /> */}
                  {/* <div className="title">
                      <p>{comic.title}</p>
                    </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterComics;
