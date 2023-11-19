import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import background from "../src/assets/img/background.jpg";

// Pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import CharacterComics from "./pages/CharacterComics";
import Comics from "./pages/Comics";

// Components
import Header from "./components/Header";

function App() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Milky_Way_IR_Spitzer.jpg/440px-Milky_Way_IR_Spitzer.jpg")`,
        width: `1200px`,
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/comics/:id" element={<CharacterComics />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
