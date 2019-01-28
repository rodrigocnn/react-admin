import React, { Component } from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import CustomersHome from './components/customers/CustomersHome'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducerCustomers from './reducers/reducerCustomers'

const  rootReducer = combineReducers({
    customer: reducerCustomers,
  
})

const store = applyMiddleware(promise, thunk)(createStore)(rootReducer) 

class App extends Component {

    constructor(props){
        super(props)
    }

  render() {

      return (
        <Provider store={store}>
            <Router >
                <Switch> 
                    <Route exact path="/clientes/" component={CustomersHome } /> 
                </Switch>
            </Router>
       </Provider>

   
      )
  }
  


} // end class

export default App;
