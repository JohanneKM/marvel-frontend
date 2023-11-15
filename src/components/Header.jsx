import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="container-header">
        <img
          src="https://cdn.registerdisney.go.com/v4/asset/bundler/MARVEL/v4/images/v1/marvel-logo.svg"
          alt="logo-marvel"
        />

        <div className="menu">
          <Link to="/characters">
            <button>Characters</button>
          </Link>
          <button>Comics</button>
          <button>Favourites</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
