import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Card from '../../components/Card.js'

export async function getStaticProps(){
  //limitação de pokemons config
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/' //de onde vai puxar os dados

  //config da chamado dos dados dinamicos
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach ((item, index)=>{
    item.id = index +1
  })
  return {
    props: {
      pokemons: data.results,
    },
  }
}


export default function Home({pokemons}) {
  return (
    <>
      
        <div className={styles.title_container}>
          <h1 className={styles.title}>Poke<span>next</span></h1>
          <Image src="/images/pokeball.png" width="50" height="50" alt="Pokeball"/>
        </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon)=>(
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
      
    </>
  )
}
