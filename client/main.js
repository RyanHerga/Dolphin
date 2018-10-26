import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import App from "../imports/ui/App";
import Portal from "../imports/ui/Auth/Portal";

import "../imports/sass/App.scss";

Meteor.startup( () => {
    const loggedIn = false;
    const componentToRender = ( loggedIn === false ) ? <Portal /> : <App />;

    render( componentToRender, document.getElementById( "render-target" ) );
} );
