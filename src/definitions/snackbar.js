// Libs
import PropTypes from 'prop-types';

export const snackbarMessageType = {
    ACCEPT: 'accept',
    WARNING: 'warning',
    CANCEL: 'cancel'
};

export const message = PropTypes.shape({
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(snackbarMessageType)).isRequired
});
