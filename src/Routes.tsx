import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Store from './components/Store';

const Routes = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Store} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
