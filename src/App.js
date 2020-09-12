import React,{useEffect} from 'react';
import Header from './Header.js'
import Home from './Home'
import './App.css';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase';
import {useStateValue} from './StateProvider'
import Payment from './Payment'
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'

const promise = loadStripe('pk_test_51HPvSjKHwLMZwn2Fh3RIFqJcplVBDHIQyvUjIKfzd0RX1joItdwCCs5bTH11rT9tWRzRYYopRmq4Eq66mFzHmDCV00wUNRZe3S');


function App() {
   const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser.email)
      if(authUser){

        dispatch({
          type: 'SET_USER',
          user : authUser
        })
      }else{
       dispatch({
         type:'SET_USER',
         user: null
       })

      } 
    })
  }, [])

  return (
    <Router>
       <div className="App">
         <Switch>
           <Route path="/login">
             <Login />
           </Route>
            <Route path="/checkout">
            < Header />
            <Checkout/>
            </Route>
            <Route path="/payment">
              <Header/>
              <Elements stripe={promise}>
              <Payment />
              </Elements>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
         </Switch>
      
      </div>
    </Router>
  );
}

export default App;
