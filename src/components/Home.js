import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination'
import axios from 'axios'

function Home() {

        const [pokemon, setPokemon] = useState([])
        const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
        const [nextPageUrl, setNextPageUrl] = useState()
        const [prevPageUrl, setPrevPageUrl] = useState()
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            setLoading(true)
            let cancel
            axios.get(currentPageUrl, {
                cancelToken: new axios.CancelToken(c => cancel = c)
            }).then(res => {
                setLoading(false)
                setNextPageUrl(res.data.next)
                setPrevPageUrl(res.data.previous)
                setPokemon(res.data.results.map(poke => poke.name))
            })

            return () => cancel()
        
        }, [currentPageUrl])

        function gotoNextPage(){
            setCurrentPageUrl(nextPageUrl)
        }

        function gotoPrevPage(){
            setCurrentPageUrl(prevPageUrl)
        }

        if (loading) return (
            <div className="container">
                <div className="center">
                    <h1>Loading...</h1>
                </div>
            </div>
        )

        return (
            <div className="container home">
                <div className="paginacionInicio">
                    <Pagination 
                        gotoNextPage={nextPageUrl ? gotoNextPage : null}
                        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
                    />
                </div>
                <PokemonList pokemon={pokemon} />
            </div>
        )
}

export default Home
