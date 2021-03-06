import React, { Component } from 'react';
import axios from 'axios';
import CourseCard from '../../components/CourseCard/CourseCard';
import { Link } from 'react-router-dom';
import './Courses.scss';

class Courses extends Component {
    state = {
      courseData: []
  }

  componentDidMount() {
    axios.get('http://localhost:7777/courses')
      .then(res => {
        const courseData = res.data;
        this.setState({
          courseData
        });
        console.log(courseData)
      })
  }


  render() {
    if (this.state.courseData === null) {
      return (
        <p>Loading Courses</p>
      )
    }

    return (
    <section className="courses">
      <div className="courses__cont">
        <h1 className="courses__title">Courses</h1>
        <div className="courses__btn-cont"> 
          <Link to="/add-course"><button type="submit" id="header__button" className="courses__button">Add New Course</button></Link>
        </div>
        <div className="courses__card">
          {this.state.courseData.map(courseData => {
            return <CourseCard 
              clubName={courseData.ClubName}
              courseName={courseData.CourseName}
              city={courseData.City}
              state={courseData.State}
              country={courseData.Country}
              hole={courseData.Holes}
              par={courseData.Par}
              key={courseData.CourseID}
              id={courseData.CourseID}
              image={courseData.Img}
            />
          })}
        </div>
      </div>
    </section>
  )}
}

export default Courses;