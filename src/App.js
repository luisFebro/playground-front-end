import React, { Fragment } from 'react';
import './App.css';
import Main from './_pieces'

function App() {
  return (
    <Fragment>
        <h1 className="main-title">PLAYGROUND - QUICK TESTING FRONT-END FUNCTIONALITIES</h1>
        <Main />
        <p className="warning">*This app should be cleaned up after every end of testing. Move to either the gallery folder or your project when finish a project </p>
    </Fragment>
  );
}

export default App;
