import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import CharacterComics from "./pages/CharacterComics";

// Components
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/character/comics" element={<CharacterComics />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
