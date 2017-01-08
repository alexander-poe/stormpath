import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import MasterPage from './pages/MasterPage';
import LoginPage from './pages/LoginPage';
import IndexPage from './pages/IndexPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import { IndexRoute, Route, browserHistory } from 'react-router';
import store from './store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


ReactStormpath.init();
ReactDOM.render(
<Provider store={store}>
	 <Router history={browserHistory}>
	  <HomeRoute path='/' component={MasterPage}>
	    <IndexRoute component={IndexPage} />
	    <LoginRoute path='/login' component={LoginPage} />
	    <Route path='/register' component={RegistrationPage} />
	    <AuthenticatedRoute>
	    	<HomeRoute path= '/profile' component={ProfilePage} />
	    </AuthenticatedRoute>
	  </HomeRoute>
	</Router>
</Provider>,
  document.getElementById('app-container')
);