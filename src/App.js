import React from 'react';
import HomePage from './pages/homepage/homepage';
import './App.css';
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (
<div>
  <h1>Hats Page</h1>
</div>

);

const JacketsPage = () => (
  <div>
    <h1>Jackets Page</h1>
  </div>
  
  );

  const SneakersPage = () => (
    <div>
      <h1>Sneakers Page</h1>
    </div>
    
    );

    const WomensPage = () => (
      <div>
        <h1>Womens Page</h1>
      </div>
      
      );

      const MensPage = () => (
        <div>
          <h1>Mens Page</h1>
        </div>
        
        );
  


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact='/hats' path='/hats' component={HatsPage}/>
        <Route exact='/jackets' path='/jackets' component={JacketsPage}/>
        <Route exact='/sneakers' path='/sneakers' component={SneakersPage}/>
        <Route exact='/womens' path='/womens' component={WomensPage}/>
        <Route exact='/mens' path='/mens' component={MensPage}/>
      </Switch>
    </div>
  );
}

export default App;
