import React from 'react';
import logo from './logo.svg';
import './App.css';
import FadeMenu from './components/Menu/FadeMenu';
import ButtonAppBar from './components/AppBarSimple/ButtonAppBar';
import PinnedSubheaderList from './components/List/PinnedSubheaderList';
import PrimarySearchAppBar from './components/PrimarySearchAppBar/PrimarySearchAppBar';
import SwipeableTemporaryDrawer from './components/Swipeable/SwipeableTemporaryDrawer';
import FormDialog from './components/FormDialog/FormDialog';
import FullScreenDialog from './components/FullScreenDialog/FullScreenDialog';
// import ComboBox from './components/Autocomplete/Autocomplete';
// import BasicTimeline from './components/BasicTimeline/BasicTimeline';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />

      <PrimarySearchAppBar/>

      <FadeMenu/>
      <FormDialog/>
      <FullScreenDialog/>

      <SwipeableTemporaryDrawer/>
      



      

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola Mundo
        </a>
      </header>

      <PinnedSubheaderList/>

    </div>
  );
}

export default App;
