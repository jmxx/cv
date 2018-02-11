import React       from 'react';
import { hot }     from 'react-hot-loader';
import classes     from './App.styl';
import Quote       from '@/components/layout/Quote/Quote.jsx';
import OpenButton  from '@/components/layout/OpenButton/OpenButton.jsx';

const App = () => {
  return (
    <div className={ classes.Wrapper }>
      <Quote />
      <OpenButton />
    </div>
  );
};

export default hot(module)(App);
