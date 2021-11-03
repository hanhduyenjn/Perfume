import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Switch>
	</BrowserRouter>,
	rootElement
);
