import React from 'react';

const button = props => (
    <a href='#' className='button' onCLick={props.clickHandler}>
        {props.text}
    </a>
);

export default button;
