import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import List from '../components/List';

export default function PokemonSearch() {
  const [pkmId, setPkmId] = useState("");
  const [pkmNames, setPkmNames] = useState({});
  const pkmLink = useNavigate();

  const endPoint = 'https://pokeapi.co/api/v2/pokemon?limit=898&offset=0';

  const getPkmNames = async() => {
    const res = await fetch(endPoint);
    const data = await res.json();
    console.log(data.results);
    setPkmNames(data.results);
  };

  useEffect(() => {
    getPkmNames();
  }, []); 
  
  const goLink = () => {
    pkmLink(`/pokemon/${pkmId}`);
  };

  return (
    <div className="container">
      <h1>Here's the list</h1>
      <div className="container--flex pkm--list">
        <select className="pkm__select" onChange={ ({ target }) => setPkmId(target.value) }>
          <List pkmNames={ pkmNames }/>
        </select>
        <button className="btn btn--send" onClick={ goLink }>Search</button>
      </div>
    </div>
  )
}