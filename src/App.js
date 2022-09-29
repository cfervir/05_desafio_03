import './styles.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './views/Home';
import Pokemon from './views/Pokemon';
import PokemonSearch from './views/PokemonSearch';
import NotFound from './views/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/" element={<PokemonSearch />} />
          <Route path="/pokemon/:pkmId" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
