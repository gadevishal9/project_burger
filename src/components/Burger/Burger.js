import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'
const burger =(props) =>
{
    // var TranformedIngredients = [];
    // for (var key in props.ingredients)
    // {
    //     for(var i=0;i<props.ingredients[key];i++)
    //     {
    //         TranformedIngredients.push(<BurgerIngredient key = {i+props.ingredients[key]} type= {key} />)
    //     }
    // }

    let  TranformedIngredients = Object.keys(props.ingredients).map(
     igKey => {
         return [...Array(props.ingredients[igKey])].map((_,i) => 
         {
             return <BurgerIngredient key = {igKey+i} type = {igKey} />

         });
     }).reduce((arr,ele) =>
    {
        return arr.concat(ele);
    },[]);

    if(TranformedIngredients.length === 0)
    {
        TranformedIngredients = <p>Please add ingredients</p>
    }

    return(
        <div className = {classes.Burger}>
<BurgerIngredient type= "bread-top" />
{TranformedIngredients}
<BurgerIngredient type= "bread-bottom" />
        </div>
    );
}
export default burger;