import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BacktraceProvider } from '@backtrace-labs/react';
import Login from './components/Login';
import Inventory from './components/Inventory';
import { USERS } from './data/products';

function Shell({ title, children }) {
  return (
    <div className="page-shell">
      <header className="shell-header">
        <div className="brand-mark">Swag Labs</div>
        <div className="shell-title">{title}</div>
      </header>
      {children}
    </div>
  );
}

function Cart() {
  return (
    <Shell title="Your Cart">
      <div className="empty-state">Cart content is maintained in inventory state for demo routing fidelity.</div>
    </Shell>
  );
}

function CheckoutStepOne() {
  return (
    <Shell title="Checkout: Your Information">
      <div className="empty-state">First name, last name, and zip code validation is handled in the full app shell.</div>
    </Shell>
  );
}

function CheckoutStepTwo() {
  return (
    <Shell title="Checkout: Overview">
      <div className="empty-state">Totals, tax formula, and summary render in the checkout overview stage.</div>
    </Shell>
  );
}

function CheckoutComplete() {
  return (
    <Shell title="Checkout Complete">
      <div className="empty-state">Thank you for your order. Pony Express confirmation is shown in the complete screen.</div>
    </Shell>
  );
}

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

ReactDOM.render(<AppRouter users={USERS} />, document.getElementById('root'));