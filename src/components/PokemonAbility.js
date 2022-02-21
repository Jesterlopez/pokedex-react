import React from 'react'

function PokemonAbility (props) {
  return (
        <div className="col-10 col-sm-6 col-md-10 pokemon-stats-right">
            <div className="pokemon-stats-title">Abilities</div>

            <div className="pokemon-moves__ability">
                    {props.abilities?.map(ability => {
                      return (
                      <div key={ability} className="pokemon-special-move ability">
                        {ability}
                     </div>
                      )
                    })}
            </div>

            <div className="pokemon-stats-title">Moves</div>

            <div className="pokemon-moves__moves">
                    {props.moves?.map(move => {
                      return (
                        <div key={move} className="pokemon-special-move move">
                            {move}
                        </div>
                      )
                    })}
            </div>

        </div>
  )
}

export default PokemonAbility
