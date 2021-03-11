import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SignIn from "../pages/Sign/SignIn";
import Topic from "../pages/Topic";
import Search from "../pages/Search";

const Routes = () => {

    return (
        <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route exact path="/" component={Home}/>
            <Route path="/search/:category/:query" component={Search}/>
            <Route exact path="/topics/:slug" component={Topic}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;
