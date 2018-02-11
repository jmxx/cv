import React   from 'react';
import { hot } from 'react-hot-loader';
import classes from './OpenButton.styl';

const OpenButton = () => {
  return (
    <div className={ classes.OpenButton }>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default hot(module)(OpenButton);
