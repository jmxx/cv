import React    from 'react';
import { hot }  from 'react-hot-loader';
import classes  from './App.styl';

const App = () => {
  return (
    <div className={classes.App}>
      <h1>CV</h1>
    </div>
  );
};

export default hot(module)(App);
