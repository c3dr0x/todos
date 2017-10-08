// Actions
import { ADD_SNACKBAR_MESSAGE, REMOVE_SNACKBAR_MESSAGE } from '../actions/snackbar';

/**
 * Snackbar reducer.
 * @param {string} state state.
 * @param {object} action action.
 * @returns {string} state.
 */
function snackbar(state = [], action) {
    switch (action.type) {
        case ADD_SNACKBAR_MESSAGE:
            return [
                ...state,
                {
                    id: action.id,
                    type: action.messageType,
                    message: action.message
                }
            ];
        case REMOVE_SNACKBAR_MESSAGE:
            return state.filter(message => message.id !== action.id);
        default:
            return state;
    }
}

export default snackbar;