// Libs
import React from 'react';
// Components
import FilterLink from './filter-link';

const Footer = () => (
    <div className='footer'>
        {'Show:'}
        {' '}
        <FilterLink filter='SHOW_ALL'>
            {'All'}
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_ACTIVE'>
            {'Active'}
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_COMPLETED'>
            {'Completed'}
        </FilterLink>
    </div>
);

export default Footer;
