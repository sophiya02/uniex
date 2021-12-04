import React from 'react';
import './button.css'
const Button = (props) => {
    return (
        <>
        <button type="button" class="btn btn-des" >{props.name}</button>
        </>
    );
}
export default Button;