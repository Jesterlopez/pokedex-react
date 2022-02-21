import PokemonStats from './components/PokemonStats'
import CardPokemon from './components/CardPokemon'
import PokemonStat from './components/PokemonStat'
import PokemonAbility from './components/PokemonAbility'
import ButtonGenerate from './components/ButtonGenerate'
import { typeImgPokemon } from './utils/TypePokemon'
import Stat from './components/Stat'
import { useState, useEffect } from 'react'
import { getPokemonById, getPokemonByName } from './utils/getPokemon'

import 'bootstrap/dist/css/bootstrap.min.css'
import './components/css/styles.css'

function App () {
  const [typePokemon, setTypePokemon] = useState('')
  const [dataPoke, setDataPoke] = useState()

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  useEffect(() => {
    getPokemonById(1).then(res => setDataPoke(res))
  }, [])

  useEffect(() => {
    const typePokemon = (img) => {
      return img.name === dataPoke?.typesPokemon[0]
    }

    setTypePokemon(typeImgPokemon.find(typePokemon))
  }, [dataPoke])

  function resets () {
    const search = document.getElementById('button-search')
    search.value = ''
  }

  async function handleOnBlur (e) {
    e.preventDefault()
    const search = document.getElementById('button-search')
    const idPoke = search.value
    const id = idPoke.toLowerCase()

    if (idPoke !== '') {
      try {
        getPokemonByName(id).then(res => setDataPoke(res))
      } catch (error) {
        console.log(error)
      }
    }

    resets()
  }

  async function handleClick (e) {
    e.preventDefault()
    const idPoke = randomNumber(1, 200)

    try {
      getPokemonById(idPoke).then(res => setDataPoke(res))
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className="container-fluid" id="home">

        <div className="row">
            <ButtonGenerate onClick={handleClick} />
            <div className="col-12 col-md-4 col-sm-12 col-left">
                <PokemonStats>
                    <PokemonStat >
                        {
                          dataPoke?.allStats?.map(stat =>
                            <Stat nameStat={stat.name} key={stat.name} width={stat.baseStat} valueStat={stat.baseStat}></Stat>
                          )
                        }
                    </PokemonStat>
                </PokemonStats>
            </div>

            <div className="col-12 col-md-4 col-sm-12 col-middle">
                <CardPokemon
                    id={dataPoke?.id}
                    name={dataPoke?.name}
                    img={dataPoke?.image}
                    exp={dataPoke?.exp}
                    imgType={typePokemon?.url}
                    height={dataPoke?.height}
                    weight={dataPoke?.weight}
                    onBlur={handleOnBlur}
                />
            </div>

            <div className="col-12 col-md-4 col-sm-12 col-right">
                <PokemonStats>
                    <PokemonAbility
                    abilities={dataPoke?.allAbilities}
                    moves={dataPoke?.allMoves}/>
                </PokemonStats>

            </div>

        </div>

    </div>
  )
}

export default App
