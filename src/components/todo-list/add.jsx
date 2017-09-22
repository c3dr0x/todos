// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { addTodo } from '../../actions/todo-list';

const mapDispatchToProps = (dispatch, { listId }) => ({
    onAdd: (text) => {
        dispatch(addTodo(listId, text));
    }
});

class Input extends Component {

    static displayName = 'Input';

    static propTypes = {
        onAdd: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(e) {
        e.preventDefault();

        const value = this.refs.input.value.trim()

        if (!value) {
            return;
        }

        this.props.onAdd(value);
        this.refs.input.value = '';
    }

    render() {
        return (
            <div className='todo-list--add'>
                <form onSubmit={this.formSubmit}>
                    <input type='text' ref='input' />
                    <button type='submit'>
                        {'Add Todo'}
                    </button>
                </form>
            </div>
        );
    }
}

const AddTodo = connect(
    null,
    mapDispatchToProps
)(Input);

export default AddTodo;
