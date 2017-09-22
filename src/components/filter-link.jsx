// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Actions
import { setVisibilityFilter } from '../actions/filter';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

const propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <button
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </button>
    )
};

Link.propTypes = propTypes;

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
