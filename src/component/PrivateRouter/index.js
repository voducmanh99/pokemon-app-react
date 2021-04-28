import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

// TODO Add conditional to private route

const PrivateRoute = ({ component: Component, ...rest }) => {
	return <Route {...rest} render={(props) => <Component {...props}/>} />;
};

PrivateRoute.propTypes = {
	component: PropTypes.elementType,
};

export default PrivateRoute;