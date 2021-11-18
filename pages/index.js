import Link from 'next/Link';

const Pokemon = ({ pokemon }) => {
  // console.log(pokemon.url.split('/').filter(x => x).pop());
  const id = pokemon.url.split('/').filter(x => x).pop();
  return(
    <li>
      <Link href={`/pokemones/${id}`}>{pokemon.name}</Link>
    </li>
  );
}

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <p>Pokemones</p>
      <ul>
        {
          pokemones.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon}/>)
        }
      </ul>
    </div>
  )
}

// funcion para que next haga renderizado estatico
export const getStaticProps = async() => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  
  return {
    props: { pokemones: data.results }
  }
}
