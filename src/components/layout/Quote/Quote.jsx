import React    from 'react';
import { hot }  from 'react-hot-loader';
import classes  from './Quote.styl';

const Quote = (props) => {
  return (
    <div className={ classes.Quote }>
      <p className={ classes.Quote_Text }>Un tipo un poco apasionado por el buen código</p>
    </div>
  );
};

export default hot(module)(Quote);
