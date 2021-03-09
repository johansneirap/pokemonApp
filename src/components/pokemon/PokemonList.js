import React, { useContext, useEffect } from 'react';
import PokeContext from '../../context/PokeContext';


export const PokemonList = () => {
    const { getPokes, pokes } = useContext(PokeContext)

    useEffect(() => {
        getPokes(151);
    }, [])

    return (
        <div className="container">
            <div className="row">
            {
                
                pokes.map((poke, i) =>
                    <div className="card col-lg-2 mx-2 mt-2">
                        <img src={poke.img} className="card-img-top" style={{ width: 10 + 'rem' }}></img>
                        <div className="card-body">
                            <h5 className="text-capitalize fw-bold fs-5"> #{poke.id} {poke.name}</h5>
                        </div>
                    </div>
                )
            }
            </div>
            {/* <ul className="list-group">
                {
                    pokes.map( poke => 
                        <li key={poke.id} className="list-group-item">
                            <p className="text-capitalize fw-bold fs-5"> #{poke.id} {poke.name}</p>
                            <img src={poke.img} style={{height:100+'px'}}></img>
                        </li>)
                }
                </ul> */}
        </div>
    )
}
