import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Inventory from './components/Inventory';

function Cart() {
  return <div className="page-shell"><h1>Cart</h1></div>;
}

function CheckoutStepOne() {
  return <div className="page-shell"><h1>Checkout Step One</h1></div>;
}

function CheckoutStepTwo() {
  return <div className="page-shell"><h1>Checkout Step Two</h1></div>;
}

function CheckoutComplete() {
  return <div className="page-shell"><h1>Checkout Complete</h1></div>;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/index.html" component={Login} />
        <Route exact path="/inventory.html" component={Inventory} />
        <Route exact path="/cart.html" component={Cart} />
        <Route exact path="/checkout-step-one.html" component={CheckoutStepOne} />
        <Route exact path="/checkout-step-two.html" component={CheckoutStepTwo} />
        <Route exact path="/checkout-complete.html" component={CheckoutComplete} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));