import { useState, useEffect } from 'react'

const useFetch = url => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        const pokemonData = {
          id: data.order,
          img: data.sprites.other.dream_world.front_default,
          name: data.name,
          height: data.height,
          weight: data.weight,
          exp: data.base_experience,
          hp: {
            name: data.stats[0].stat.name,
            value: data.stats[0].base_stat
          },
          attack: {
            name: data.stats[1].stat.name,
            value: data.stats[1].base_stat
          },
          defense: {
            name: data.stats[2].stat.name,
            value: data.stats[2].base_stat
          },
          specialAttack: {
            name: data.stats[3].stat.name,
            value: data.stats[3].base_stat
          },
          specialDefense: {
            name: data.stats[4].stat.name,
            value: data.stats[4].base_stat
          },
          speed: {
            name: data.stats[5].stat.name,
            value: data.stats[5].base_stat
          },
          ability: data.abilities[0].ability.name,
          // move1: data.moves[0].move.name,
          // move2: data.moves[1].move.name,
          // move3: data.moves[2].move.name,
          moves: [
            data.moves[0].move.name,
            data.moves[1].move.name,
            data.moves[2].move.name
          ],
          types: data.types[0]

        }
        setData(pokemonData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [url])

  return { data }
}

export default useFetch
