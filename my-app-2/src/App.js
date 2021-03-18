// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path = '/dialogs' render = {() => <Dialogs state = {props.state.dialogsPage} /> }  />
          <Route path = '/profile' render = {() => <Profile state = {props.state.profilePage} />}  />
          <Route path = '/music' component = {Music}/>
          <Route path = '/news' component = {News}/>
          <Route path = '/settings' component = {Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
