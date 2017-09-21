// Libs
import { connect } from 'react-redux';
// Actions
import { setVisibilityFilter } from '../actions/filter'
// Components
import Link from '../components/link'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter));
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
