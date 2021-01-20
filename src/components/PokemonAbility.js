import React from 'react'

function PokemonAbility(props){
    // const [ability, setAbility] = useState('')
    // const [move, setMove] = useState('')


    // useEffect(() => {
    //     setAbility(ability)
    //     setMove(move) 

    //     return () => {
    //         setAbility('') 
    //         setMove('')  
    //     };
    // }, []);

    return(
        <div className="col-10 col-sm-6 col-md-10 pokemon-stats-right">
            <div className="pokemon-stats-title">Ability</div>


            <div className="pokemon-moves__ability">
                <div className="pokemon-special-move ability">
                    {props.ability}
                </div>
            </div>

            <div className="pokemon-stats-title">Moves</div>

            <div className="pokemon-moves__moves">

                
                <div className="pokemon-special-move move">
                    {props.move1}
                </div>
                <div className="pokemon-special-move move">
                    {props.move2}
                </div>
                <div className="pokemon-special-move move">
                    {props.move3}
                </div>
            
            </div>

        </div>
    )
}

export default PokemonAbility