import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Render from '../components/Render';

export default function Pokemon() {

  const [ pkmData, setPkmData ] = useState({});

  const endPoint = 'https://pokeapi.co/api/v2/pokemon';
  const { pkmId } = useParams();

  const getPkmData = async(pkmId) => {
    const res = await fetch(`${endPoint}/${pkmId}`);
    const data = await res.json();
    console.log(data);
    setPkmData(data);
  };

  useEffect(() => {
    getPkmData(pkmId);
  }, [pkmId]); 
  
  return (
    <div className="container">
      <Render pkmData={pkmData} />
    </div>
  )
}