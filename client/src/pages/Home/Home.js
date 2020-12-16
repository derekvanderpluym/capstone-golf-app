import React, { Component } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return(
      <div className="home">
        <Link to="/courses" className="home__cont"><div className="home__cont">
          <h1 className="home__title">Play A Round</h1>
        </div></Link>
        <Link to="/stats" className="home__cont"><div className="home__cont">
          <h1 className="home__title">My Stats</h1>
        </div></Link>
      </div>
    )
  }
}