import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Login from "./Login";
import Register from "./Register";

export default class Portal extends Component {
    state = {
        mode: "login",
    }

    switch( newMode ) {
        this.setState( { mode: newMode } );
    }

    render() {
        const { mode } = this.state;
        const componentToRender = ( mode === "login" ) ? <Login /> : <Register />;

        const otherMode = ( mode === "login" ) ? "register" : "login";

        return (
            <div className="wrapper">
                {componentToRender}
                <Button variant="contained" color="primary" type="button" onClick={ () => this.switch( otherMode ) }> switch instead</Button>
            </div>
        );
    }
}
