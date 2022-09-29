export default function List( {pkmNames} ) {

  let pkmInfo = Object.keys(pkmNames)
    .map(function(key) {
      return pkmNames[key];
    }
  );

  return (
    <>
      <option>Choose one!</option>
      { pkmInfo.map((pkm, i) => (
        <option
          value={ (pkm.url).replace('https://pokeapi.co/api/v2/pokemon/','') }
          key={i} >
            {pkm.name.charAt(0).toUpperCase() + pkm.name.slice(1).toLowerCase()}
        </option>
      ))}
    </>
  )
}