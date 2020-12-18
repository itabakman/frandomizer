import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"
import {AuthPage} from "./pages/AuthPage"
import {RandomPage} from "./pages/RandomPage"
import {SettingsPage} from "./pages/SettingsPage"


export const useRoutes =(isAuthenticated)=>{
    if (isAuthenticated)
    { return (
        <Switch>
        <Route path="/random" exact>
            <RandomPage/>
        </Route>
        <Route path="/settings" >
            <SettingsPage/>
        </Route>
        <Redirect to="/random"/>
        </Switch> )
    }
    else {

        return (
        <Switch>
            <Route path="/" exact>
            <AuthPage/>
        </Route>
        <Redirect to="/"/>
        </Switch>
        )
    }
}