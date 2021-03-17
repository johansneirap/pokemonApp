import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import PokeContext from '../../context/PokeContext';
import './typePokes.css';

export const PokemonScreen = ({ history }) => {
    const {pokemonId} = useParams();
    const {getSelectedPoke, selectedPoke} = useContext(PokeContext);
    useEffect(() => {
        getSelectedPoke(pokemonId)
    }, [])
    const pokemon = selectedPoke;
    console.log(pokemon)
    const handleReturn = ()=> {
        if (history.length <= 1) {
            history.push('/');
        }
        history.goBack();
    }
    return (
        <div className="container">
            <h1>Pokemon screen</h1>
            <hr/>
            {pokemon ? <div className="row">
                <div className=" col-sm-12 col-md-6 col-lg-4">
                    <img src={pokemon ? pokemon.img:""} style={{maxWidth:340}} className="animate__animated animate__fadeInLeft"/>
                </div>
                <div className="col">
                    <h1 className="text-capitalize"> { pokemon ?
                    pokemon.name:""}</h1>
                    {pokemon.types.map( type =>(
                        <div key={type.type.name} className={`me-2 badge bg-primary text-wrap text-capitalize ${type.type.name}`} style={{width: 6+"rem"}}>
                        {type.type.name}
                    </div>
                    ))}
                    <p className="mt-2"> Pokedex: <b>#{pokemon.id}</b></p>
                    <p className="mt-2"> Altura: <b>{pokemon.height/10} m</b></p>
                    <p> Peso: <b>{pokemon.weight/10} kg</b> </p>
                    <button className="btn btn-outline-primary"
                            onClick={handleReturn}
                    > Go back </button>
                </div>
            </div>:<></>}
        </div>
    )
}
