// Libs
import { connect } from 'react-redux';
// Actions
import { addTodo } from '../actions/todos';
// Components
import TodoInput from '../components/todos/input';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAdd: (text) => {
        dispatch(addTodo(text));
    }
});

const AddTodo = connect(
    null,
    mapDispatchToProps
)(TodoInput);

export default AddTodo;
