// Libs
import React from 'react';
import PropTypes from 'prop-types';
// Definitions
import { todo } from '../../definitions';
// Components
import TListCheckbox from 'react-toolbox/lib/list/ListCheckbox';

const propTypes = {
    ...todo,
    onToggleTodo: PropTypes.func.isRequired
};

/**
 * LineComponent.
 * @param {object} props props.
 * @returns {JSXElement} component.
 */
const Line = ({ id, text, completed, onToggleTodo }) => {
    return (
        <TListCheckbox checked={completed} caption={text} onChange={() => onToggleTodo(id)} />
    );
};

Line.displayName = 'Line';
Line.propTypes = propTypes;

export default Line;
