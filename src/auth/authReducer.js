import {LOGIN, LOGOUT} from '../context/types';

export const authReducer = (state = {}, action) =>{
    const {type, payload} = action;
    switch (type) {
        case LOGIN:
            
            return  { ...payload, logged:true }
        case LOGOUT:

            return{ logged:false }
    
        default:
            return state;
    }
}