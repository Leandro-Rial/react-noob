import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import PokemonList from './Card/PokemonList';

function Home() {

        const [pokemonData, setPokemonData] = useState([]);
        const [nextPageUrl, setNextPageUrl] = useState('');
        const [prevPageUrl, setPrevPageUrl] = useState('');
        const [loading, setLoading] = useState(true);
        const currentPageUrl = 'https://pokeapi.co/api/v2/pokemon'

        useEffect(() => {
            async function fetchData() {
                let response = await getAllPokemon(currentPageUrl);
                setNextPageUrl(response.next);
                setPrevPageUrl(response.previous);
                let pokemon = await loadingPokemon(response.results);
                console.log(pokemon);
                setLoading(false);
            }
            fetchData();
        }, []);

        const next = async () => {
            setLoading(true);
            let data = await getAllPokemon(nextPageUrl)
            await loadingPokemon(data.results)
            setNextPageUrl(data.next);
            setPrevPageUrl(data.previous)
            setLoading(false)
        }

        const prev = async () => {
            if(!prevPageUrl) return;
            setLoading(true);
            let data = await getAllPokemon(prevPageUrl)
            await loadingPokemon(data.results)
            setNextPageUrl(data.next);
            setPrevPageUrl(data.previous)
            setLoading(false)
        }

        const loadingPokemon = async (data) => {
            let _pokemonData = await Promise.all(data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon.url);
                return pokemonRecord
            })
            );

            setPokemonData(_pokemonData);
        };

        console.log(pokemonData);

        return (
            <div className="home">
                { loading ? <h1 className="cargaPage">Loading...</h1> : (
                    <>
                        <div>
                            <h1 className="tituloPokeDex">PokéDex</h1>
                        </div>
                        <div className="kokemone">
                            {pokemonData.map((pokemon, i) => {
                                return <PokemonList key={i} pokemon={pokemon} />
                            })}
                        </div>
                        <div className="botones">
                            <button 
                                onClick={prev}
                                className="botonPokemon"
                            >Prev</button>
                            <button 
                                onClick={next}
                                className="botonPokemon"
                            >Next</button>
                        </div>
                    </>
                    ) 
                }
            </div>
        )
}

export default Home
