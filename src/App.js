import PokemonStats from './components/PokemonStats'
import CardPokemon from './components/CardPokemon'
import PokemonStat from './components/PokemonStat';
import PokemonAbility from './components/PokemonAbility';
import ButtonGenerate from './components/ButtonGenerate'
import Stat from './components/Stat'
// import useFetch from './hooks/useFetch'
import {useState, useEffect} from 'react'




import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/styles.css'



function App() {

    const [dataStat, setDataStat] = useState([
            {
                nameStat: '-',
                width: '-',
                id: 1
            },
            {
                nameStat: '-',
                width: '-',
                id: 2
            },
            {
                nameStat: '-',
                width: '-',
                id: 3
            },
            {
                nameStat: '-',
                width: '-',
                id: 4
            },
            {
                nameStat: '-',
                width: '-',
                id: 5
            },
            {
                nameStat: '-',
                width: '-',
                id: 6
            }

    ]);
    const [dataMove, setDataMove] = useState({
        moves: {
            move1: '-',
            move2: '-',
            move3: '-',
        }
    });
    const [dataPoke, setDataPoke]  = useState({
            id: '-',
            img: '-',
            name: '-',
            height: '-',
            weight: '-',
            exp: '-',
            hp: {
                name: '-',
                value: '-',
            },
            attack: {
                name: '-',
                value: '-',
            },
            defense: {
                name: '-',
                value: '-',
            },
            specialAttack: {
                name: '-',
                value: '-',
            },
            specialDefense: {
                name: '-',
                value: '-',
            },
            speed: {
                name: '-',
                value: '-',
            },
            ability: '-',
            types: ''
    })

    
    
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function resets () { 
        const search = document.getElementById("button-search");
        search.value = "";
    }
    const typeImgData = [
    {
        name: 'dark',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/dark.svg?alt=media&token=1d07def0-9243-45ce-b4b5-71d14a756ced'
    },
    {
        name: 'dragon',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/dragon.svg?alt=media&token=8cefe80b-bcf9-4fdc-b91b-fcf2dccd51b7'
    },
    {
        name: 'bug',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/bug.svg?alt=media&token=87852166-f5ac-4085-a2e3-6516a0c26837'
    },
    {
        name: 'electric',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/electric.svg?alt=media&token=fcb220cf-5531-4fef-8eb1-44e709c3b448'
    },
    {
        name: 'fairy',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/fairy.svg?alt=media&token=ad46e067-14df-41a3-a421-fa9f9cc189db'
    },
    {
        name: 'fighting',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/fighting.svg?alt=media&token=8a2f1d3e-b409-4297-ae3b-2eb381e9e001'
    },
    {
        name: 'fire',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/fire.svg?alt=media&token=2b846d22-af9e-4c93-b7e4-e94311ecbbff'
    },
    {
        name: 'flying',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/flying.svg?alt=media&token=818a0135-7c7c-496c-af90-7d76beb0ab99'
    },
    {
        name: 'ghost',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/ghost.svg?alt=media&token=3110c0b3-c65a-4fca-8e86-81ba2ad100d2'
    },
    {
        name: 'ground',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/ground.svg?alt=media&token=dc62d85b-81f5-4a36-9e09-0bf39c88dc8c'
    },
    {
        name: 'grass',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/grass.svg?alt=media&token=beccff4f-6e64-48e6-930f-c96e4f3ecdd5'
    },
    {
        name: 'ice',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/ice.svg?alt=media&token=3d30b7bb-40ca-4a8e-89db-f8cabbf4b382'
    },
    {
        name: 'normal',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/normal.svg?alt=media&token=5961e2ef-4691-4cb7-8223-1e62cb959dc4'
    },
    {
        name: 'poison',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/poison.svg?alt=media&token=a82342ff-8023-4dfa-8424-afe49c4adfaf'
    },
    {
        name: 'psychic',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/psychic.svg?alt=media&token=d1860eac-23c6-4310-878d-c861486660fc'
    },
    {
        name: 'rock',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/rock.svg?alt=media&token=4dda4d4c-4b2b-4318-a6e9-c29082dafb0a'
    },
    {
        name: 'steel',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/steel.svg?alt=media&token=56d0c9c2-6fe2-4de2-a073-0470d6fdad0a'
    },
    {
        name: 'water',
        url: 'https://firebasestorage.googleapis.com/v0/b/api-rest-typepokemon.appspot.com/o/water.svg?alt=media&token=a11d1b51-59f4-4de7-ba93-d4a2cabc814f'
    }
]

    async function handleOnBlur(e) {
        e.preventDefault()
        const search = document.getElementById("button-search");
        const idPoke = search.value
 
         try {
             let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
             let data = await res.json()
             // console.log(data)

             function value(img) {
                return img.name === data.types[0].type.name;
            }

            const dataImg = data.types[0].type.name
            
            console.log(dataImg)
            const typeName = typeImgData.find(value);

            // console.log(typeName)
            const urlImg = typeName.url;
            // console.log(urlImg)
             setDataPoke({
                 id: data.order,
                 img: data.sprites.other.dream_world.front_default,
                 name: data.name,
                 height: data.height,
                 weight: data.weight,
                 exp: data.base_experience,
                 hp: {
                     name: data.stats[0].stat.name,
                     value: data.stats[0].base_stat,
                 },
                 attack: {
                     name: data.stats[1].stat.name,
                     value: data.stats[1].base_stat,
                 },
                 defense: {
                     name: data.stats[2].stat.name,
                     value: data.stats[2].base_stat,
                 },
                 specialAttack: {
                     name: data.stats[3].stat.name,
                     value: data.stats[3].base_stat,
                 },
                 specialDefense: {
                     name: data.stats[4].stat.name,
                     value: data.stats[4].base_stat,
                 },
                 speed: {
                     name: data.stats[5].stat.name,
                     value: data.stats[5].base_stat,
                 },
                 ability: data.abilities[0].ability.name,
                 types: urlImg
             })
             setDataMove({
                 moves: {
                     move1: data.moves[0].move.name,
                     move2: data.moves[1].move.name,
                     move3: data.moves[2].move.name,
                 }
             })
             setDataStat([
                 {
                     nameStat: data.stats[0].stat.name,
                     width: data.stats[0].base_stat,
                     id: 1
                 },
                 {
                     nameStat: data.stats[1].stat.name,
                     width: data.stats[1].base_stat,
                     id: 2
                 },
                 {
                     nameStat: data.stats[2].stat.name,
                     width: data.stats[2].base_stat,
                     id: 3
                 },
                 {
                     nameStat: data.stats[3].stat.name,
                     width: data.stats[3].base_stat,
                     id: 4
                 },
                 {
                     nameStat: data.stats[4].stat.name,
                     width: data.stats[4].base_stat,
                     id: 5
                 },
                 {
                     nameStat: data.stats[5].stat.name,
                     width: data.stats[5].base_stat,
                     id: 6
                 }
             ])
 
         } catch (error) {
             console.log(error)
         }
         resets()


    }
    
    async function handleClick (e) {
         e.preventDefault();     
         const idPoke = randomNumber(1, 200);
 
         try {
             let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
             let data = await res.json()

             function value(img) {
                return img.name === data.types[0].type.name;
            }

            const dataImg = data.types[0].type.name
            
            console.log(dataImg)
            const typeName = typeImgData.find(value);

            // console.log(typeName)
            const urlImg = typeName.url;
            // console.log(urlImg)

            
    
            // console.log(data.types.type.name)
            // console.log(typeName)
            //  console.log(data)

             setDataPoke({
                 id: data.order,
                 img: data.sprites.other.dream_world.front_default,
                 name: data.name,
                 height: data.height,
                 weight: data.weight,
                 exp: data.base_experience,
                 hp: {
                     name: data.stats[0].stat.name,
                     value: data.stats[0].base_stat,
                 },
                 attack: {
                     name: data.stats[1].stat.name,
                     value: data.stats[1].base_stat,
                 },
                 defense: {
                     name: data.stats[2].stat.name,
                     value: data.stats[2].base_stat,
                 },
                 specialAttack: {
                     name: data.stats[3].stat.name,
                     value: data.stats[3].base_stat,
                 },
                 specialDefense: {
                     name: data.stats[4].stat.name,
                     value: data.stats[4].base_stat,
                 },
                 speed: {
                     name: data.stats[5].stat.name,
                     value: data.stats[5].base_stat,
                 },
                 ability: data.abilities[0].ability.name,
                 types: urlImg
             })
             setDataMove({
                 moves: {
                     move1: data.moves[0].move.name,
                     move2: data.moves[1].move.name,
                     move3: data.moves[2].move.name,
                 }
             })
             setDataStat([
                 {
                     nameStat: data.stats[0].stat.name,
                     width: data.stats[0].base_stat,
                     id: 1
                 },
                 {
                     nameStat: data.stats[1].stat.name,
                     width: data.stats[1].base_stat,
                     id: 2
                 },
                 {
                     nameStat: data.stats[2].stat.name,
                     width: data.stats[2].base_stat,
                     id: 3
                 },
                 {
                     nameStat: data.stats[3].stat.name,
                     width: data.stats[3].base_stat,
                     id: 4
                 },
                 {
                     nameStat: data.stats[4].stat.name,
                     width: data.stats[4].base_stat,
                     id: 5
                 },
                 {
                     nameStat: data.stats[5].stat.name,
                     width: data.stats[5].base_stat,
                     id: 6
                 }
             ])

 
         } catch (error) {
             console.log(error)
         }
         // console.log(dataMove)
         // console.log(dataPoke)
 
     }
    // console.log(dataMove)
    
    // console.log(dataStat)
    
    
    useEffect(() => {

   
        // setDataStat(dataStatPokemon)
        // console.log(dataStat)

        return () => {
            setDataStat([]);
            setDataMove([]);
            setDataPoke([]);
        };
    }, []);

  return (

    <div className="container-fluid" id="home">

        <div className="row">
            <ButtonGenerate onClick={handleClick} onBlur={handleOnBlur}/>
            <div className="col-12 col-md-4 col-sm-12 col-left">
                <PokemonStats>
                    <PokemonStat >
                        {
                            dataStat.map(({nameStat, width, id}) =>
                               <Stat nameStat={nameStat} key={id} width={width} valueStat={width}></Stat>
                            )
                        }
                    </PokemonStat>
                </PokemonStats>        
            </div>

            <div className="col-12 col-md-4 col-sm-12 col-middle">
                <CardPokemon 
                    id={dataPoke.id} 
                    name={dataPoke.name} 
                    img={dataPoke.img} 
                    exp={dataPoke.exp} 
                    imgType={dataPoke.types}
                    height={dataPoke.height}
                    weight={dataPoke.weight}
                />
            </div>


            <div className="col-12 col-md-4 col-sm-12 col-right">
                <PokemonStats>
                    <PokemonAbility 
                    ability={dataPoke.ability}
                     move1={dataMove.moves.move1} 
                     move2={dataMove.moves.move2} 
                     move3={dataMove.moves.move3}/>
                </PokemonStats>

            </div>


        </div>
    
    </div>
  );
}

export default App;
