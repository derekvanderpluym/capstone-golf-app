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
          <div className="cc__container">
            <img className="cc__image" src={image} alt="course-image"/>
              <div className="cc__text-cont">
              <Link to={`${id}`}><h2 className="cc__title">{clubName}</h2></Link>
              <h3 className="cc__course-name">{courseName}</h3>
              <p className="cc__text">{city}, {state}, {country}</p>
              <p className="cc__text">{hole} Holes, Par {par}</p>
            </div>
          </div>
        </li>
      </ul>
    )
  }
}

export default CourseCard;




// render() { 
//   const { CourseID, CourseName, ClubName, Country, City, State, Holes, Par } = this.props;
//   console.log(this.props)
//   return (
//     <ul className="cc">
//       <li>
//         <div className="cc__container">
//           <h2 className="cc__title">{CourseName}</h2>
//           <h3 className="cc__course-name">course name</h3>
//           <p className="cc__text">city</p>
//           <p className="cc__text">state</p>
//           <p className="cc__text">country</p>
//           <p className="cc__text">hole</p>
//           <p className="cc__text">par</p>
//         </div>
//       </li>
//     </ul>
//   )
// }
// }