import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoInput extends Component {

    static displayName = 'TodoInput';

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
            <div className='todo--input'>
                <form onSubmit={this.formSubmit}>
                    <input type='text' ref='input' />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoInput;
