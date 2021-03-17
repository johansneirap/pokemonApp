import React from 'react';
import { PokemonList } from './PokemonList';

export const HomeScreen = () => {
    return (
        <>
            <h1 className="">Bienvenido ! :D</h1>
            <PokemonList limit={151}/>
        </>
    )
}
