import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { reducer as formReducer } from 'redux-form';
import AppRouter from './router/AppRouter';
//import account from './components/account';

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    //account,
    form: formReducer
  }),    
  composeEnhancers()
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <AppRouter/>
        </Provider>
      </ApolloProvider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));



