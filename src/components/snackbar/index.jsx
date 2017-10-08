// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { removeSnackbarMessage } from '../../actions/snackbar';
// Definition
import { message } from '../../definitions';
// Components
import TSnackbar from 'react-toolbox/lib/snackbar/Snackbar';

/**
 * Map state to props.
 * @param {object} state Sate.
 * @returns {object} Props.
 */
const mapStateToProps = (state) => ({
    message: state.snackbar[0]
});

/**
 * Map dispatch to props.
 * @param {func} dispatch Dispatch.
 * @returns {object} Props.
 */
const mapDispatchToProps = (dispatch) => ({
    removeSnackbarMessage: (id) => dispatch(removeSnackbarMessage(id))
});

/**
 * Snackbar component.
 */
class SnackBar extends Component {

    /** Display name. */
    static displayName = 'Snacbar';

    /** PropTypes. */
    static propTypes = {
        message,
        removeSnackbarMessage: PropTypes.func.isRequired
    };

    /** Default props. */
    static defaultProps = {
        message: undefined
    };

    /** Initial state. */
    state = {
        active: false
    };

    /**
     * Constructor.
     * @param {object} props Props.
     */
    constructor(props) {
        super(props);

        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    /** @inheritdoc */
    componentWillReceiveProps(newProps) {
        const { message = {} } = this.props;
        const { message: newMessage } = newProps;

        if (newMessage && newMessage.id !== message.id) {
            this.setState({ active: true });
        }
    }

    /**
     * Close snackbar.
     */
    handleSnackbarClose() {
        const { message: { id } } = this.props;

        this.setState(
            { active: false },
            // Wait for close animation to finish
            () => setTimeout(() => this.props.removeSnackbarMessage(id), 300)
        );
    }

    /** @inheritdoc */
    render() {
        const { message = {} } = this.props;

        return (
            <TSnackbar
                action='Dismiss'
                active={this.state.active}
                label={message.message}
                onClick={this.handleSnackbarClose}
                onTimeout={this.handleSnackbarClose}
                timeout={2000}
                type={message.type}
            />
        );
    }
}

const SnackBarConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(SnackBar);

export default SnackBarConnected;
