import React from 'react';
import s from './app.module.css'
import {
    About,
    Create,
    Home,
    Login
} from '../../pages'
import {Route, Switch} from "react-router-dom";
import Header from "../header";

const App = () => {
    return (
        <div className={s.main}>
            <Header/>
            <div className={s.container}>
           <Switch>
               <Route path='/about/' component={About} exact />
               <Route path='/create/' component={Create} exact />
               <Route path='/home/' component={Home} exact />
               <Route path='/login/' component={Login} exact />


           </Switch>
            </div>
        </div>
    );
};

export default App;