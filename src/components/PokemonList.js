import React from 'react';
import { Link } from 'react-router-dom';


 export default function PokemonList({ pokemon }) {
            
    return (
            <div>
                {pokemon.map(poke => (
                // <div key={poke}>{poke}</div>
                <div className="poke card" key={poke}>
                     <div className="card-content">
                         <Link to={'/' + poke}>
                             <h1 className="tituloPoke">{poke}</h1>
                         </Link>
                     </div>
                </div>
            ))}
        </div>
    )
}
