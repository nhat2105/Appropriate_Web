import React from 'react'
//import './IconButton.css';
import arrow from "../assets/left_vector.png"

const Button = ({ onClick, direction }) => {
  return (
    <button className="button-container" onClick={onClick} >
        <img className={`${direction}-button-img`} src={arrow} alt='' />
    </button>
  );
};

export default Button