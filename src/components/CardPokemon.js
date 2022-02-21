import React from 'react'
import './css/cardPokemon.css'

function CardPokemon (props) {
  return (
        <div className="card-pokemon">
            <div className="input-search">
                <input
                id="button-search"
                type="text"
                className="form-control text-center"
                placeholder="Search Pokemon activing onBlur"
                autoComplete="off"
                onBlur={props.onBlur}
                />
            </div>
            <div className="card-pokemon-number">
            n°{props.id}
            </div>
            <h2 className="info__pokemon-name">{props.name}</h2>
            <div className="pokemon-container-img">
                <img src={props.img} alt="" className="pokemon-img"/>
            </div>

        <div className="info__general">
            <div className="info__pokemon-type">
                <img src={props.imgType} alt="type pokemon" />
                {/* {props.imgType.forEach(type => {
                    <img src={type} alt="" />
                })} */}
            </div>

            <div className="info__pokemon_size">
                <p className="pokemon-size">Height <span id="height">{props.height}m</span></p>
                <span className="info__pokemon-exp">{props.exp}Exp</span>
                <p className="pokemon-size" >Weight <span id="weight">{props.weight}kg</span></p>
            </div>
        </div>
    </div>
  )
}

export default CardPokemon
