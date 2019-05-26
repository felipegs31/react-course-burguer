import React from "react";
import Burger from "../../Burger/Burger";
import Classes from './Checkout.module.css';

import Button from '../../UI/Button/Button';

const CheckoutSummary = props => {
  return (
    <div className={Classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button 
        btnType="Danger"
        clicked={props.CheckoutCancelled}>Cancel</Button>
      <Button 
        btnType="Success" 
        clicked={props.CheckoutContinued}>Continue</Button>

    </div>
  );
};

export default CheckoutSummary;
