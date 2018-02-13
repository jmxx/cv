import React       from 'react';
import { hot }     from 'react-hot-loader';
import classes     from './App.styl';
import MainContainer      from '@/components/layout/MainContainer/MainContainer.jsx';
import Quote       from '@/components/layout/Quote/Quote.jsx';
import OpenButton  from '@/components/layout/OpenButton/OpenButton.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showContainer: false
    };
  }

  render() {
    return (
      <div className={ classes.Wrapper }>
        <Quote />
        <OpenButton onClick={ () => this.setState({ showContainer: !this.state.showContainer }) }/>
        {
          this.state.showContainer ? <MainContainer /> : ''
        }
      </div>
    );
  }
}

export default hot(module)(App);
