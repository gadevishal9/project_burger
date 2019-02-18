import React,{Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
const INGREDIENT_PRICE =
{
    salad: 0.3,
    cheese : 0.2,
    bacon: 1.2,
    meat: 1.4
}
class BurgerBuilder extends Component
{
    state = {
        ingredients:
        {
            salad: 0,
            cheese : 0,
            bacon: 0,
            meat: 0
        },

        TotalPrice : 4
    }
    addIngredientHandler = (type) =>
    {
        let updated_ingredients = {...this.state.ingredients};
         updated_ingredients[type]= this.state.ingredients[type] + 1;
        let updated_price = this.state.TotalPrice;
        updated_price = this.state.TotalPrice + INGREDIENT_PRICE[type];
        this.setState({ingredients:updated_ingredients, TotalPrice:updated_price});
    }
    removeIngredienthandler = (type) =>
    {
        let updated_ingredients = {...this.state.ingredients};
        updated_ingredients[type]= this.state.ingredients[type] - 1;
        if(updated_ingredients[type] <0) return;
        let updated_price = this.state.TotalPrice;
        updated_price = this.state.TotalPrice - INGREDIENT_PRICE[type];
        this.setState({ingredients:updated_ingredients, TotalPrice:updated_price});
    }

    render()
    {
        let disabled_info = {...this.state.ingredients};
        for(let key in disabled_info)
        {
            disabled_info[key] = disabled_info[key]<=0;
        }
        return (
            <Aux>
                
                <div>
                    <Burger ingredients = {this.state.ingredients}></Burger>
                    
                </div>
                
                    <BuildControls ingredientAdded = {this.addIngredientHandler} ingredientRemoved = {this.removeIngredienthandler} disabled_info ={disabled_info} price = {this.state.TotalPrice}></BuildControls>
            </Aux>
        );
    }
}
export default BurgerBuilder;