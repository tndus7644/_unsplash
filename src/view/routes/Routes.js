import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SignIn from "../pages/Sign/SignIn";
import Search from "../pages/Search";
import PhotoDetail from "../pages/PhotoDetail";
import Collection from "../pages/Collection";

const Routes = () => {

    return (
        <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route exact path="/" component={Home}/>
            <Route path="/search/photos/:query" component={Search}/>
            <Route path="/search/collections/:query" component={Collection}/>
            <Route path="/photos/:id" component={PhotoDetail}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;
