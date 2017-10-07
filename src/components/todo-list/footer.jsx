// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Actions
import { setVisibilityFilter, VisibilityFilters } from '../../actions/filter';
// Components
import TCardActions from 'react-toolbox/lib/card/CardActions';
import TButton from 'react-toolbox/lib/button/Button';

/**
 * mapDispatchToProps
 * @param {fun} dispatch dispatch.
 * @param {object} props props.
 * @returns {object} props.
 */
const mapDispatchToProps = (dispatch, { listId }) => ({
    onClick: (filter) => {
        dispatch(setVisibilityFilter(listId, filter));
    }
});

const propTypes = {
    visibilityFilter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const filters = [
    { label: 'All', filter: VisibilityFilters.SHOW_ALL },
    { label: 'Active', filter: VisibilityFilters.SHOW_ACTIVE },
    { label: 'Completed', filter: VisibilityFilters.SHOW_COMPLETED }
];

/**
 * Footer component.
 * @return {JSXElement} component.
 */
const Footer = ({ visibilityFilter, onClick }) => (
    <div className='footer'>
        <TCardActions>
            {filters.map(filter => (
                <TButton
                    key={filter.filter}
                    label={filter.label}
                    onMouseUp={() => onClick(filter.filter)}
                    disabled={visibilityFilter === filter.filter}
                />
            ))}
        </TCardActions>
    </div>
);

Footer.displayName = 'Footer';
Footer.propTypes = propTypes;

const FooterConnected = connect(
    null,
    mapDispatchToProps
)(Footer);

export default FooterConnected;
