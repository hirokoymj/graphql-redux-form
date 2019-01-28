import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';
import ContactFormPage from '../components/ContactFormPage';
import Test from '../components/Test';
import ContactFormResult from '../components/ContactFormResult';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Test} exact={true} />
          <Route path="/myReduxForm" component={ContactFormPage} />
          <Route path="/result" component={ContactFormResult} />
        </Switch>
      </div>
    </Router>
);
export default AppRouter;


// <Route path="/test" component={ContactFormResult} />          
// <Route path="/myReduxForm" component={ContactFormPage} />

