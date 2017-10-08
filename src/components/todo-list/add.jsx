// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { addTodo } from '../../actions/todo-list';
// Components
import TInput from 'react-toolbox/lib/input/Input';
import TButton from 'react-toolbox/lib/button/Button';

/**
 * mapDispatchToProps.
 * @param {func} dispatch dispatch.
 * @param {object} props props.
 * @return {object} props.
 */
const mapDispatchToProps = (dispatch, { listId }) => ({
    onAdd: (text) => {
        dispatch(addTodo(listId, text));
    }
});

/**
 * InputComponent.
 */
class Input extends Component {

    static displayName = 'Input';

    static propTypes = {
        onAdd: PropTypes.func.isRequired
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

        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);
    }

    /**
     * Handle text change.
     * @param {string} text text.
     */
    handleChange(text) {
        this.setState({ text });
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

        if (text !== '') {
            this.props.onAdd(text);
        }
        this.setState({ text: '' });
    }

    /** @inheritdoc */
    render() {
        const { text } = this.state;

        return (
            <form onSubmit={this.add}>
                <div className='todo-list--add'>
                    <TInput type='text' label='New todo' name='todo' value={text} onChange={this.handleChange} />
                    <TButton icon='add' label='Add' onMouseUp={this.add} flat primary />
                </div>
            </form>
        );
    }
}

const AddTodo = connect(
    null,
    mapDispatchToProps
)(Input);

export default AddTodo;
