import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonCard = ({ poke }) => {
    return (
        <div className="col">
            <div className="shadow-sm card ms-3" key={poke.id} style={ {maxWidth:340}}>
                        <img src={poke.img} className="card-img-top py-1 px-1" style={ {maxWidth:330}} alt={poke.name}></img>
                        <div className="card-body">
                            <h6 className="text-capitalize "> #{poke.id} {poke.name}</h6>
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
