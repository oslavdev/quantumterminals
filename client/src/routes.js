import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './hoc/auth';

//Containers Admin
import Intro from './containers/Admin//intro/intro';
import Menu from './containers/Admin/menu';
import Difficulty from './containers/Admin/difficulty';
import Login from './containers/Admin/login';
import Register from './containers/Admin/register';
import Logout from './containers/Admin/logout';

// Containders Pages
import Leaderboard from './containers/Pages/Leaderboard/leaderboard';
import Credits from './containers/Pages/Credits/credits';
import Memos from './containers/Pages/Memos/memos';
import Error from './containers/Pages/Error/error';
import Info from './containers/Pages/Info/info';
import About from './containers/Pages/About/about';





//Game
import Game from './components/Game/game';
import Level from './components/Game/Level';




class Routes extends Component {
    render(){
        return(

                <Switch>
                    <Route path="/" exact component={Auth(Intro,false)}/>
                    <Route path="/menu" exact component={Auth(Menu,true)}/>
                    <Route path="/login" exact component={Auth(Login,false)}/>
                    <Route path="/register" exact component={Auth(Register,false)}/>
                    <Route path="/logout" exact component={Auth(Logout,true)}/>
                    <Route path="/game" exact component={Auth(Game,true)}/>
                    <Route path="/difficulty" exact component={Auth(Difficulty,true)}/>
                    <Route path="/leaderboard" exact component={Auth(Leaderboard,true)}/>
                    <Route path="/credits" exact component={Auth(Credits,true)}/>
                    <Route path="/about" exact component={Auth(About,true)}/>
                    <Route path="/memos" exact component={Auth(Memos,true)}/>
                    <Route path="/level" exact component={Auth(Level,true)}/>
                    <Route path="/info" exact component={Auth(Info,true)}/>
                    <Route path="/error" exact component={Error}/>
                </Switch>

        )
    }
}

export default Routes;
