export default function List( {pkmNames} ) {

  let pkmInfo = Object.keys(pkmNames)
    .map(function(key) {
      return pkmNames[key];
    }
  );

  return (
    <>
      <option>Choose one!</option>
      { pkmInfo.map((pkm, i) => ( <option value={ (pkm.url).replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','') } key={i}> {pkm.name} </option> )) }
    </>
  )
}