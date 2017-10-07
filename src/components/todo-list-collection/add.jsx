// Libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Actions
import { addTodoList } from '../../actions/todo-list-collection';
// Components
import TDialog from 'react-toolbox/lib/dialog/Dialog';
import TInput from 'react-toolbox/lib/input/Input';

/**
 * mapDispatchToProps.
 * @param {func} dispatch dispatch.
 * @param {object} props props.
 * @return {object} props.
 */
const mapDispatchToProps = (dispatch) => ({
    onAdd: (name) => {
        dispatch(addTodoList(name));
    }
});

/**
 * AddTodoList component.
 */
class AddTodoList extends Component {

    static displayName = 'AddTodoList';

    static propTypes = {
        onAdd: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired
    };

    state = {
        text: ''
    };

    /**
     * Constructor.
     * @param {object} props props.
     */
    constructor(props) {
        super(props);

        this.add = this.add.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Actions for dialog.
     * @returns {array} Actions.
     */
    getActions() {
        return [
            { label: 'Cancel', onClick: this.close },
            { label: 'Save', onClick: this.add }
        ];
    }

    /**
     * Add todoItem.
     * @param {object} event event.
     */
    add(event) {
        if (event) {
            event.preventDefault();
        }

        const { text } = this.state;

        this.props.onAdd(text);
        this.setState({ text: '' });

        this.close();
    }

    /**
     * Close component.
     */
    close() {
        this.props.close();
    }

    /**
     * Handle text change.
     * @param {string} text text.
     */
    handleChange(text) {
        this.setState({ text });
    }

    /** @inheritdoc */
    render() {
        const { text } = this.state;

        return (
            <TDialog
                actions={this.getActions()}
                active
                onEscKeyDown={this.close}
                onOverlayClick={this.close}
                title='Add a todo-list'
            >
                <form onSubmit={this.add}>
                    <TInput type='text' label='Name' name='todo-list' value={text} onChange={this.handleChange} />
                </form>
            </TDialog>
        );
    }
}

const AddTodoListConnected = connect(
    null,
    mapDispatchToProps
)(AddTodoList);

export default AddTodoListConnected;