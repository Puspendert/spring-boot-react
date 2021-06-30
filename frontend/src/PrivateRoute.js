import React from "react";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({component: ComponentToRender, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            return rest.isAuthenticated ? (
                <ComponentToRender {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {target: props.search}
                    }}
                />
            );
        }}
    />
);

export default PrivateRoute;