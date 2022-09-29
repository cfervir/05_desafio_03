import { useNavigate } from 'react-router-dom';

export default function Render( {pkmData} ) {

  const navigate = useNavigate();

  if (pkmData.sprites === undefined) {
    return (
      <div>
          <p>It's loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="capitalize">{pkmData.name}</h2>
      <p> { pkmData.types.map((t, i) => (
          <span className="capitalize" key={i}> {t.type.name } </span>
        ))
      } </p>
      <div className="pkm--images">
        <img src={ pkmData.sprites.other.home.front_default } alt={ pkmData.name } className="pkm--img" />
        <img src={ pkmData.sprites.other.home.front_shiny } alt={ `Shiny ${pkmData.name}` } className="pkm--img" />
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
      <button onClick={() => navigate("/pokemon")}>Back!</button>
    </div>
  )
}