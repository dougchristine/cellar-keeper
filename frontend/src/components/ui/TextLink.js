import React from 'react';
import PropTypes from 'prop-types';

export const textLink = (props) => {
    return (
        <a className="text-link" href='#'>{props.render()}</a>
    )
}

textLink.propTypes = {
    render: PropTypes.func.isRequired
}

export default textLink;