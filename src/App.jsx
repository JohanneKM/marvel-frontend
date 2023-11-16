import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import CharacterComics from "./pages/CharacterComics";
import Comics from "./pages/Comics";

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
          <Route path="/comics/:id" element={<CharacterComics />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
