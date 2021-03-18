import React, { useContext, useEffect } from 'react';
import PokeContext from '../../context/PokeContext';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string'
import { PokemonCard } from './PokemonCard';

export const SearchPokemonScreen = ({ history }) => {

    const { getPokes, pokes } = useContext(PokeContext);

    useEffect(() => {
        getPokes(151);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({ searchText: q });

    const { searchText } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
        // pokeFiltered = getPokeByName(searchText)[0];
    }

    const getPokeByName = (name = '') => {
        if (name === '') {
            return [];
        }
        name = name.toLowerCase();
        return pokes.filter(poke => poke.name.toLowerCase().includes(name))
    }
    const pokeFiltered = getPokeByName(q);
    return (
        <div>
            <h1>Search Pokemon screen</h1>
            <hr />
            <div className="row p-3">
                <div className="col-12 col-sm-6 col-md-4 mb-3">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group ">
                            <input className="form-control"
                                type="text"
                                placeholder="Find your favorite pokemon"
                                autoComplete="off"
                                name="searchText"
                                value={searchText}
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="btn btn-primary">
                                Search
                        </button>
                        </div>
                    </form>
                </div>
            </div>
            <h5> Search results:</h5>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3  row-cols-xl-3 g-4 mb-3 p-3">
                
                {
                    (q === '')
                    &&
                    <div className="alert alert-info">
                        Search a pokemon
                    </div>
                }
                {
                    (q !== '' && pokeFiltered.length === 0)
                    &&
                    <div className="col">
                        <div className="alert alert-danger">
                            There is no a pokemon with {q}
                        </div>
                    </div>
                }
                {pokeFiltered ?
                    pokeFiltered.map( poke =>(

                        <PokemonCard
                            key = {poke.id}
                            poke={poke}
                        /> 
                    )

                    )
                    : <></>
                }
            </div>
        </div>
    )
}
