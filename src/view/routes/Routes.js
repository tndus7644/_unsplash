import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Home from "../pages/Home";
import SignIn from "../pages/Sign/SignIn";
import Search from "../pages/Search";
import PhotoDetail from "../pages/Detail/Detail";

const Routes = () => {

    return (
        <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route exact path="/" component={Home}/>
            <Route path="/search/photos/:query" component={Search}/>
            <Route path="/photos/:id" component={PhotoDetail}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;
