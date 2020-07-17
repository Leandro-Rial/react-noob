import React from 'react';
import './style.css';
import typeColors from '../../helpers/pokemonTypes';
import { Link } from 'react-router-dom';

 export default function PokemonList({ pokemon }) {
            
    return (
        <div>
            <Link to={'/' + pokemon.id}>
                <div className="Card">
                    <div className="Card__img">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
                    <div className="Card__name">
                        {pokemon.name}
                    </div>
                    <div className="Card__types">
                        {pokemon.types.map(type => {
                            return (
                                <div 
                                    className="Card__type"
                                    style={{ backgroundColor: typeColors[type.type.name] }}
                                    >
                                    {type.type.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className="Card__info">
                        
                        <div className="Card__data__Card__data--weight">
                            <p className="title">Weight</p>
                            <p>{pokemon.weight}</p>
                        </div>
                        
                        <div className="Card__data__Card__data--height">
                            <p className="title">Height</p>
                            <p>{pokemon.height}</p>
                        </div>

                        <div className="Card__data__Card__data--ability">
                            <p className="title">Ability</p>
                            <p>{pokemon.abilities[0].ability.name}</p>
                        </div>
                    
                    </div>
                </div>
            </Link>
        </div>
    )
}
