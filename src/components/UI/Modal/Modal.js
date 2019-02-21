import React from 'react';
import classes from './Modal.css'
import BackDrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
const Modal = (props) =>
{
// let SHOw = null;
// if(!props.purchasing)
// //show = {props.children};
let k = null;
if(props.show)
{
    k = props.children;
}
return(
    <Aux>
    <BackDrop show = {props.show} clicked = {props.modalClosed} />
<div className = {classes.Modal}  style = {{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
opacity: props.show ? '1' : '0'
}}>
{k}

</div>
</Aux>
);
};

export default Modal;