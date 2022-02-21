import React from 'react'

function Pokemon (props) {
  return (

        <span className="card-pokemon-content">
            <div className="card-pokemon-number">
            {props.pokemonId}
            </div>
            <h2 className="info__pokemon-name">{props.pokemonName}</h2>
            <div className="pokemon-container-img">
                <img src={props.pokemonImg} alt="" className="pokemon-img"/>
            </div>

            <div className="info__general">
                <div className="info__pokemon-type"></div>

                <div className="info__pokemon_size">
                    <p className="pokemon-size">Height <span id="height">{props.heightPokemon}m</span></p>
                    <span className="info__pokemon-exp">{props.experiencePokemon}Exp</span>
                    <p className="pokemon-size" >Weight <span id="weight">{props.weightPokemon}kg</span></p>
                </div>
            </div>
        </span>
  )
}
export default Pokemon
