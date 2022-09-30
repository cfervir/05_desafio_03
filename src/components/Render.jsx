import { useNavigate } from 'react-router-dom';
import Images from '../images';

export default function Render( {pkmData} ) {

  const navigate = useNavigate();

  if (pkmData.sprites === undefined) {
    return (
      <div className="loading">
          <p>It's loading...</p>
          <img src={Images.pokeball} alt="Pokeball" className="pokeball-load" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="capitalize">{pkmData.name}</h2>
      <div className="container--flex container--types">
        { pkmData.types.map((t, i) => (
          <img
            src={ Images[t.type.name] }
            alt={ t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1).toLowerCase() }
            title={ t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1).toLowerCase() }
            className="pkm--type" key={i}
          />
        ))}
      </div>
      <div className="pkm--images">
        <img src={ pkmData.sprites.other.home.front_default } alt={ pkmData.name } className="pkm--img" />
        <img src={ pkmData.sprites.other.home.front_shiny }
          alt={ `Shiny ${pkmData.name.charAt(0).toUpperCase()}${pkmData.name.slice(1).toLowerCase()}` }
          title={ `Shiny ${pkmData.name.charAt(0).toUpperCase()}${pkmData.name.slice(1).toLowerCase()}` }
          className="pkm--img pkm--shiny"
        />
      </div>
      <div>
        <p>HP: { pkmData.stats[0].base_stat }</p>
        <p>Attack: { pkmData.stats[1].base_stat }</p>
        <p>Defense: { pkmData.stats[2].base_stat }</p>
        <p>Sp. Atk: { pkmData.stats[3].base_stat }</p>
        <p>Sp. Def: { pkmData.stats[4].base_stat }</p>
        <p>Speed: { pkmData.stats[5].base_stat }</p>
      </div>
      { pkmData.abilities.map((p, i) => (
          <p className="capitalize" key={i}> {p.ability.name } {p.is_hidden ? 'Hidden' : 'Normal'} </p>
        ))
      }
      <button className="btn btn--back" onClick={() => navigate("/pokemon")}>Back!</button>
    </div>
  )
}