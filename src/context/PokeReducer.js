import { GET_POKES, GET_SELECTED_POKE } from './types';

export default (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_POKES:
            return {
                ...state,
                pokes: payload
            }
        case GET_SELECTED_POKE:
                return {
                    ...state,
                    selectedPoke: payload
                }

        default:
            return state;
    }
}