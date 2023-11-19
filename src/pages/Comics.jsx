import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");

  const [tabComics, setTabComics] = useState();
  console.log(tabComics);

  // for the pagination
  const [currentPageComics, setCurrentPageComics] = useState(1);
  console.log(currentPageComics);
  const [resultsPerPageComics] = useState(100);
  const nbPages = Math.ceil(1493 / resultsPerPage);
  console.log("nbPages ===>", nbPages);
  let skip = 0;
  if (name.length !== 0) {
    skip = 0;
  } else {
    skip = (currentPage - 1) * resultsPerPage;
  }
  console.log("skip ==>", skip);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--j7xsyk95scmh.code.run/comics?title=${title}`
        );
        setData(response.data);
        setIsLoading(false);
        setTabComics(response.data.results);
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
      {/* 

      
    
      

      <input
        placeholder="Search"
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      /> */}

      <div className="container-comics">
        {data.results.map((comic) => {
          return (
            <div key={comic._id} className="one-character">
              <img
                src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
                alt="comic-picture"
              />
              <div className="one-character-text">
                {/* <p> {tabComics[0].title}</p> */}
                <h2>{comic.title}</h2>
                <div className="comic-desc">
                  {/* <p>{comic.description}</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
