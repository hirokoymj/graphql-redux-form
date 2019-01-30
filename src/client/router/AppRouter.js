import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';
import ContactFormPage from '../components/ContactFormPage';
import ContactForm from '../components/ContactForm';
import Home from '../components/Home';
import ContactFormResult from '../components/ContactFormResult';
import LocationSearchInputPage from '../components/LocationSearchInputPage';
import AutoCompleteForm from '../components/AutoCompleteForm';

import GoogleMapPage from '../components/GoogleMapPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/myReduxForm" component={ContactFormPage} />
          <Route path="/result" component={ContactFormResult} />
          <Route path="/address" component={LocationSearchInputPage} />
          <Route path="/map" component={GoogleMapPage} />
        </Switch>
      </div>
    </Router>
);
export default AppRouter;


// <Route path="/test" component={ContactFormResult} />          
// <Route path="/myReduxForm" component={ContactFormPage} />
// <Route path="/address" component={LocationSearchInputPage} />

