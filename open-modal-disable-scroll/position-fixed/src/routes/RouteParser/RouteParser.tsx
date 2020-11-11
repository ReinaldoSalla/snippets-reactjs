import React from 'react';
import { Route } from 'react-router';

const RouteParser = (route) => (
	<Route
		path={route.path}
		render={(props) => <route.component {...props} routes={route.routes} />}
	/>
);

export default RouteParser;