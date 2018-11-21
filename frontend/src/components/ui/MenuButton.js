import React from 'react';
import PropTypes from 'prop-types';

export const menuButton = props => (
    <a className='menu-button' href='#'>
        {props.render()}
    </a>
);

menuButton.propTypes = {
    render: PropTypes.func.isRequired
};

export default menuButton;
