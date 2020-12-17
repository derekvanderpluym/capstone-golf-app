import React from 'react';
import './CourseCard.scss';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class CourseCard extends Component {


  render() { 
    const { clubName, courseName, city, state, country, hole, par, id, image } = this.props;
    return (
      <ul className="cc">
        <li>
          <Link to={`${id}`}><div className="cc__container">
            <img className="cc__image" src={image} alt="course-image"/>
              <div className="cc__text-cont">
              <h2 className="cc__title">{clubName}</h2>
              <h3 className="cc__course-name">{courseName}</h3>
              <p className="cc__text">{city}, {state}, {country}</p>
              <p className="cc__text">{hole} Holes, Par {par}</p>
            </div>
          </div></Link>
        </li>
      </ul>
    )
  }
}

export default CourseCard;

