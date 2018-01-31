import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import App                  from './components/App/App.jsx';
import './app.styl';

ReactDOM.render(<App />, document.getElementById('root'), () => {
  console.log('mounted');
});
