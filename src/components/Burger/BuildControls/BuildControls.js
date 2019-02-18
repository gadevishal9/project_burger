import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]
const BuildControls = (props) =>
(
<div className = {classes.BuildControls}>
<p> Total Price : <strong> {props.price.toFixed(2)} </strong> </p>
{
    controls.map(ctrl => (
        
        <BuildControl label = {ctrl.label}  key = {ctrl.label} 
        added = {() => props.ingredientAdded(ctrl.type)}  
        removed = {() => props.ingredientRemoved(ctrl.type)}
        disabled = {props.disabled_info[ctrl.type]} ></BuildControl>
    )
)
}
<botton className = {classes.button}> <span>Order Now </span> </botton>   
</div>

);
export default BuildControls;