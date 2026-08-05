import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BacktraceProvider } from '@backtrace-labs/react';
import './styles.css';
import Login from './components/Login';
import Inventory from './components/Inventory';
import Cart from './components/Cart';
import CheckoutStepOne from './components/CheckoutStepOne';
import CheckoutStepTwo from './components/CheckoutStepTwo';
import CheckoutComplete from './components/CheckoutComplete';

function AppRouter() {
  return (
    <BacktraceProvider
      configuration={{
        token: import.meta.env.VITE_BACKTRACE_TOKEN || 'local-demo-token',
        productName: 'Swag Labs (SauceDemo)',
        versionName: '1.0.0',
      }}
    >
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
    </BacktraceProvider>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));