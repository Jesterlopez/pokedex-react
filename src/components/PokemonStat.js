import React from 'react'

function PokemonStat ({ children }) {
  return (
        <div className="col-10 col-sm-6 col-md-10 pokemon-stats-left">
            <div className="pokemon-stats-title">stats</div>
            {children}
        </div>
  )
}

export default PokemonStat
