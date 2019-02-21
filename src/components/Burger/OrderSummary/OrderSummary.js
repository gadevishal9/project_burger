import React from 'react';
import Aux  from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const OrderSummary = (props) =>
{
    let Burger_Ingredients = []
    for(let key in props.ingredients)
    {
        Burger_Ingredients.push(<li key ={key }>{key} : {props.ingredients[key]}</li>)
    }
return(
<Aux>
<p>Your Order has following Ingredients : </p>
<ul>
{Burger_Ingredients}
</ul>
<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
<p>Continue to Checkout ?</p>
<Button  btnType = "Danger" clicked = {props.purchaseCancelled}> CANCEL </Button>
<Button btnType = "Success" clicked = {props.purchaseContinue} > CONTINUE </Button> 

</Aux>
);
};
export default OrderSummary;