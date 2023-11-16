import { useLocation } from "react-router-dom";

const CharacterComics = () => {
  const location = useLocation();
  const { comicsTab } = location.state;
  console.log(comicsTab);
  return (
    <div className="container">
      <p>Page CharacterComics</p>
    </div>
  );
};

export default CharacterComics;
