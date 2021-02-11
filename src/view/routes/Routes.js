import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import SignIn from "../pages/Sign/SignIn";
import SearchPhotos from "../pages/Search/SearchPhotos";
import PhotoDetail from "../pages/PhotoDetail";
import SearchCollection from "../pages/Search/SearchCollection";
import SearchUsers from "../pages/Search/SearchUsers";
import Topic from "../pages/Topic";

const Routes = () => {

    return (
        <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route exact path="/" component={Home}/>
            <Route path="/search/photos/:query" component={SearchPhotos}/>
            <Route path="/search/collections/:query" component={SearchCollection}/>
            <Route path="/search/users/:query" component={SearchUsers}/>
            <Route path="/topics/:slug" component={Topic}/>
            <Route path="/photos/:id" component={PhotoDetail}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;
