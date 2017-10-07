
/**
 * Load state from local storage.
 * @returns {object} State.
 */
export function loadState() {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

/**
 * Save state into local storage/
 * @param {object} state State.
 */
export function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
}
