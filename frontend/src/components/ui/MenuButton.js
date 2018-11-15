import React from 'react';

export const menuButton = (props) => {
    return (
        <a className="menu-button" href='#'>{props.render()}</a>
    )
}

export default menuButton;