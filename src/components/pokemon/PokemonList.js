import React, { useContext, useEffect } from 'react';
import PokeContext from '../../context/PokeContext';
import { PokemonCard } from './PokemonCard';


export const PokemonList = () => {
    const { getPokes, pokes } = useContext(PokeContext)

    useEffect(() => {
        getPokes(151);
    }, [])

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5  row-cols-xl-6 g-4">
                {
                    pokes.map(poke =>(
                        <PokemonCard
                        key = {poke.id}
                        poke={poke}
                        />
                    ))
                }
            </div>
            {/* <div className="">
            {
                
                pokes.map((poke, i) =>
                    <div className="card  mx-2 mt-2" key={poke.id}>
                        <img src={poke.img} className="card-img-top mx-1" style={{ width: 10 + 'rem' }}></img>
                        <div className="card-body">
                            <h5 className="text-capitalize fw-bold fs-5"> #{poke.id} {poke.name}</h5>
                        </div>
                    </div>
                )
            }
            </div> */}
            
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
