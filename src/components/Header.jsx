const Header = () => {
  return (
    <div className="container">
      <div className="container-header">
        <img
          src="https://cdn.registerdisney.go.com/v4/asset/bundler/MARVEL/v4/images/v1/marvel-logo.svg"
          alt="logo-marvel"
        />

        <div className="menu">
          <button>Characters</button>
          <button>Comics</button>
          <button>Favourites</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
