import { useNavigate } from 'react-router-dom';
import Images from '../images';

export default function Render( {pkmData} ) {

  const sumStats = (pkmData) => {
    let data = pkmData.stats.map((s) => ({
      stat: s.base_stat 
    }));
    let sum = data.reduce((a, b) => 
      a + b.stat, 0
    );
    return sum;
  };

  const navigate = useNavigate();

  if (pkmData.sprites === undefined ) {
    return (
      <div className="loading">
          <p>It's loading...</p>
          <img src={Images.pokeball} alt="Pokeball" className="pokeball-load" />
      </div>
    );
  };

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
      <div className="pkm__stats">
        <h3 className="pkm__title">Stats</h3>
        <div className="container--flex pkm__stats--sort">
          <div className="pkm__stats--text">
            <p><span className="pkm__stats--name">HP:</span> <strong>{ pkmData.stats[0].base_stat }</strong></p>
          </div>
          <div className="pkm__stat pkm__stat--hp">
            <div className="pkm__stat--inside" style={ {width: `${(100 * parseInt(pkmData.stats[0].base_stat)/255)}%`,
              backgroundColor: "#50ff64"} }>
            </div>
          </div>
        </div>
        <div className="container--flex pkm__stats--sort">
          <div className="pkm__stats--text">
            <p><span className="pkm__stats--name">Attack:</span> <strong>{ pkmData.stats[1].base_stat }</strong></p>
          </div>
          <div className="pkm__stat pkm__stat--atk">
            <div className="pkm__stat--inside" style={ {width: `${(100 * parseInt(pkmData.stats[1].base_stat)/255)}%`,
              backgroundColor: "#fff532"} }>
            </div>
          </div>
        </div>
        <div className="container--flex pkm__stats--sort">
          <div className="pkm__stats--text">
            <p><span className="pkm__stats--name">Defense:</span> <strong>{ pkmData.stats[2].base_stat }</strong></p>
          </div>
          <div className="pkm__stat pkm__stat--def">
            <div className="pkm__stat--inside" style={ {width: `${(100 * parseInt(pkmData.stats[2].base_stat)/255)}%`,
              backgroundColor: "#ff9632"} }>
            </div>
          </div>
        </div>
        <div className="container--flex pkm__stats--sort">
          <div className="pkm__stats--text">
            <p><span className="pkm__stats--name">Sp. Attack:</span> <strong>{ pkmData.stats[3].base_stat }</strong></p>
          </div>
          <div className="pkm__stat pkm__stat--sp-atk">
            <div className="pkm__stat--inside" style={ {width: `${(100 * parseInt(pkmData.stats[3].base_stat)/255)}%`,
              backgroundColor: "#64faff"} }>
            </div>
          </div>
        </div>
        <div className="container--flex pkm__stats--sort">
          <div className="pkm__stats--text">
            <p><span className="pkm__stats--name">So. Def:</span> <strong>{ pkmData.stats[4].base_stat }</strong></p>
          </div>
          <div className="pkm__stat pkm__stat--sp-def">
            <div className="pkm__stat--inside" style={ {width: `${(100 * parseInt(pkmData.stats[4].base_stat)/255)}%`,
              backgroundColor: "#5096ff"} }>
            </div>
          </div>
        </div>
        <div className="container--flex pkm__stats--sort">
          <div className="pkm__stats--text">
            <p><span className="pkm__stats--name">Speed:</span> <strong>{ pkmData.stats[5].base_stat }</strong></p>
          </div>
          <div className="pkm__stat pkm__stat--spd">
            <div className="pkm__stat--inside" style={ {width: `${(100 * parseInt(pkmData.stats[5].base_stat)/255)}%`,
              backgroundColor: "#d778ff"} }>
            </div>
          </div>
        </div>
        <div>
            <p><span className="pkm__stats--name">Total Stats:</span> <strong>{ sumStats(pkmData) }</strong></p>
          </div>
      </div>
      <div className="pkm__abilities">
        <h3 className="pkm__title">Abilities</h3>
        { pkmData.abilities.map((p, i) => (
            <p className={p.is_hidden ? 'capitalize pkm__abilities--hidden' : 'capitalize'} key={i}> {p.ability.name } </p>
          ))
        }
      </div>
      <button className="btn btn--back" onClick={() => navigate("/pokemon")}>Back!</button>
    </div>
  )
}