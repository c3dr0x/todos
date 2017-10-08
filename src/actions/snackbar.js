import uuid from 'uuid/v4';

export const ADD_SNACKBAR_MESSAGE = 'ADD_SNACKBAR_MESSAGE';
export const REMOVE_SNACKBAR_MESSAGE = 'REMOVE_SNACKBAR_MESSAGE';

export const snackbarMessageType = {
    ACCEPT: 'accept',
    WARNING: 'warning',
    CANCEL: 'cancel'
};

/**
 * Add a snackbar message.
 * @param {string} message Snackbar message.
 * @returns {object} Action.
 */
export function addSnackbarMessage(message) {
    return {
        type: ADD_SNACKBAR_MESSAGE,
        id: uuid(),
        messageType: snackbarMessageType.CANCEL,
        message
    };
}

/**
 * Remove a snackbar message.
 * @param {string} id Snackbar message identifier.
 * @returns {object} Action.
 */
export function removeSnackbarMessage(id) {
    return {
        type: REMOVE_SNACKBAR_MESSAGE,
        id
    };
}