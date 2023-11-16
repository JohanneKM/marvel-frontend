import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--j7xsyk95scmh.code.run/comics?title=${title}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [title]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="container">
      <input
        placeholder="Search"
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <div className="container-characters">
        {data.results.map((comic) => {
          return (
            <div key={comic._id} className="one-character">
              <img
                src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
                alt="comic-picture"
              />
              <div className="one-character-text">
                <p>{comic.title}</p>
                <p>{comic.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
