import React from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/ToolBar/Toolbar'
import Logo from '../Logo/Logo'
const layout = (props) =>
     (
        <Aux>
           <Toolbar></Toolbar>
           
            <main className = {classes.Content} >
                {props.children}
            </main>
        </Aux>

    );


export default layout;