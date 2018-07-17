import React, { Component } from 'react';
import { homeActions, getHomeState } from '../../controllor/home';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './index.scss';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({home: getHomeState});
const mapDispatchToProps = Object.assign( {}, homeActions);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
