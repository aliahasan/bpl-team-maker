// import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({selectedActors,remaining,totalCost}) => {
    // console.log(selectedActors)
    return (
        
     <div className='cart-container'>
            <h3>Selected Actor: {selectedActors.length}</h3>
            <p>TotalCost:{totalCost}</p>
            <p>Remaining: {remaining}</p>
           <div className='list'>
            {
               selectedActors.map((actor, index) => (<li key={index}>{actor.name}</li>))
            }
        </div>
     </div>
     
    );
};

Cart.propTypes ={
    selectedActors:PropTypes.array.isRequired,
    remaining:PropTypes.number.isRequired,
    totalCost:PropTypes.number.isRequired
}

export default Cart;