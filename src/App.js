import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './components/sign-in-and-sign-up-page/sign-in-and-sign-up';
import Header from './components/header/header';
  


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
