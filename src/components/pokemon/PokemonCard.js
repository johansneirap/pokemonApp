import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonCard = ({ poke }) => {
    return (
        <div className="col">
            <div className="card ms-3" key={poke.id} style={ {maxWidth:240}}>
                        <img src={poke.img} className="card-img-top mx-1" style={ {maxWidth:230}} alt={poke.name}></img>
                        <div className="card-body">
                            <h5 className="text-capitalize fs-5"> #{poke.id} {poke.name}</h5>
                            <div className="text-center">
                                <Link className="btn btn-outline-primary btn-sm" to = {`./pokemon/${poke.id}`}>
                                More...
                                </Link>
                            </div>
                        </div>
            </div>
        </div>
    )
}
