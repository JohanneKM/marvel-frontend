import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CharacterComics = () => {
  const location = useLocation();
  const { comicsTab, characterID } = location.state;
  // console.log(comicsTab);
  console.log(characterID);

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
      <p>Page CharacterComics</p>

      {comicsTab.map((elem) => {
        return <p key={elem}>{elem}</p>;
      })}

      <p> {characterID}</p>

      {data.comics.map((comic, index) => {
        return <p key={index}>{comic.title}</p>;
      })}
    </div>
  );
};

export default CharacterComics;
