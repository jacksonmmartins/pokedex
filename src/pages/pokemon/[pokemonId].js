import Image from "next/image"
import styles from '../../styles/Pokemon.module.css'
export const getStaticPaths = async() =>{
      //limitação de pokemons config
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/' //de onde vai puxar os dados

  //config da chamado dos dados dinamicos
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()
  
  //params
    const paths = data.results.map((pokemon,index)=> {
        return{
            params: {pokemonId: (index+1).toString()},
        }
    })
    return{
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()
    return{
        props: {pokemon:data},
    }
}

export default function Pokemon ({pokemon}) {
    return (
    <>    
    <div>
            <h1>{pokemon.name}</h1>
                <Image
                   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                   width = '120'
                   height= '120'
                   alt = {pokemon.name}
                />
       
        
        <div>
           <h3>Número:</h3>
           <p>#{pokemon.id}</p> 
        </div>
        
        <div>
           <h3>Tipo:</h3>
           
           <div>
                {pokemon.types.map((types, index)=>{
                    <span key={index}>{types.name}</span>
                })}
           </div>
        </div>
    </div>
    </>
    )
}