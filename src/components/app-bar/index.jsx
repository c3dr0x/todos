// Libs
import React, { Component } from 'react';
// Components
import TAppBar from 'react-toolbox/lib/app_bar/AppBar';
import TButton from 'react-toolbox/lib/button/Button';
import AddTodoList from '../todo-list-collection/add';
// Styles
import './styles/app_bar.scss';

/**
 * AppBar component.
 */
class AppBar extends Component {

    state = {
        showAddTodoList: false
    };

    /**
     * Constructor.
     * @param {object} props  Props.
     */
    constructor(props) {
        super(props);

        this.tooggleAddTodoListDialog = this.tooggleAddTodoListDialog.bind(this);
    }

    /**
     * Toggle add todolist dialog.
     */
    tooggleAddTodoListDialog() {
        this.setState({ showAddTodoList: !this.state.showAddTodoList });
    }

    /** @inheritdoc */
    render() {
        return (
            <div>
                <div className='app-bar'>
                    <TAppBar title='ToDo.app' />
                    <div className='app-bar--fab-container'>
                        <TButton icon='add' floating accent onClick={this.tooggleAddTodoListDialog} />
                    </div>
                </div>
                <div>
                    {this.state.showAddTodoList && (
                        <AddTodoList close={this.tooggleAddTodoListDialog} />
                    )}
                </div>
            </div>
        );
    }
}

export default AppBar;