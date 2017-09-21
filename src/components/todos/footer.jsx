import React from 'react';
import FilterLink from '../../containers/filter-link';

const Footer = () => (
    <div className='todo--foter'>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </div>
)

export default Footer;
