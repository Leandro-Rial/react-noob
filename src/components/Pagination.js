import React from 'react'

function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage} className="botonPokemon">Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage} className="botonPokemon">Next</button>}
        </div>
    )
}

export default Pagination
