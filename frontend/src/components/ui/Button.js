import React from 'react';

const button = (props) => {
    return (
        <a href="#" className="button" onCLick={props.clickHandler}>{props.text}</a>
    )
}

export default button;