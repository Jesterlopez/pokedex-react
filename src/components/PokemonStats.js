import React from 'react'

import './css/pokemonStats.css'

const PokemonStats = ({ children }) => {
  return (
        <div className="info__pokemon-stats">
            {children}
        </div>
  )
}

export default PokemonStats
