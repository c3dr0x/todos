// Actions
import { SET_VISIBILITY_FILTER } from '../actions/filter';
// Definitions
import { visibilityFilters } from '../definitions/filter';

/**
 * Visibility filter reducer.
 * @param {string} state state.
 * @param {object} action action.
 * @returns {string} state.
 */
function visibilityFilter(state = visibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;