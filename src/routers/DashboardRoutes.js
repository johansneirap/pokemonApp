import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HomeScreen } from '../components/pokemon/HomeScreen'
import { PokemonScreen } from '../components/pokemon/PokemonScreen'
import { SearchPokemonScreen } from '../components/pokemon/SearchPokemonScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/home" component={HomeScreen}/>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/search" component={SearchPokemonScreen}/>
                    <Route exact path="/pokemon/:pokemonId"component={PokemonScreen}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </>
    )
}
