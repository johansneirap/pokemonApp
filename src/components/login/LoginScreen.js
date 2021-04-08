import React,{useContext} from 'react';
import {AuthContext} from '../../auth/AuthContext';
import {LOGIN} from '../../context/types'

export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext);
    const handleLogin = ()=>{
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: LOGIN,
            payload: {
                name: 'Johans'
            }
        })
        history.replace(lastPath);
    }
    return (
        <div className="container mt-5">
            <h1>Login screen</h1>
            <hr/>
            <button className="btn btn-primary"
            onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
