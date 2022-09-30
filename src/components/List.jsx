export default function List( {pkmNames} ) {

  let pkmInfo = Object.keys(pkmNames)
    .map(function(key) {
      return pkmNames[key];
    }
  );

  return (
    <>
      <option className="pkm__select--option">Choose one!</option>
      { pkmInfo.map((pkm, i) => (
        <option 
          className="pkm__select--option"
          value={ (pkm.url).replace('https://pokeapi.co/api/v2/pokemon/','') }
          key={i} >
            {pkm.name.charAt(0).toUpperCase() + pkm.name.slice(1).toLowerCase()}
        </option>
      ))}
    </>
  )
}