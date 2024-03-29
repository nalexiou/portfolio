import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master'
import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <BrowserRouter basename='/portfolio'  history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={ () => <Header><App/></Header>}/>
            <Route path='/jokes' render={ () => <Header><Jokes/></Header>}/>
            <Route path='/music-master' render={ () => <Header><MusicMaster/></Header>}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));