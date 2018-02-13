import React   from 'react';
import { hot } from 'react-hot-loader';
import classes from './OpenButton.styl';

const OpenButton = (props) => {
  return (
    <div className={ classes.OpenButton } onClick={ props.onClick }>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default hot(module)(OpenButton);
