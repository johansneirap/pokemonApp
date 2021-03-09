import axios from 'axios';
import React, { useReducer } from 'react';
import PokeContext from './PokeContext';
import PokeReducer from './PokeReducer';

export const PokeState = (props) => {
    const initialState = {
        pokes: [],
        selectedPoke: null
    }
    const [state, dispatch] = useReducer(PokeReducer, initialState);

    const getPokes = async (limit) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const pokes = res.data.results.map((poke,i) => {
            let pok = {};
            pok = {
                ...poke
            };
            pok.id=i+1;
            pok.img=`https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`;
            return pok;
        }

        )

        console.log(pokes)
        dispatch({
            type: 'GET_POKES',
            payload: pokes
        })
    }

    const getSelectedPoke = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res);
    }

    return (
        <PokeContext.Provider value={{
            pokes: state.pokes,
            selectedPoke: state.selectedPoke,
            getPokes,
            getSelectedPoke
        }
        }>
            {props.children}
        </PokeContext.Provider>
    )
}