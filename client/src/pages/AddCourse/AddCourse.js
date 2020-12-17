import React, { Component } from 'react';
import './AddCourse.scss';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class AddCourse extends Component {

  state = {
    CourseName: "",
    ClubName: "",
    City: "",
    State: "",
    Country: "",
    Slope: "",
    Rating: "",
    Par: "",
    Holes: "",
    FrontPar: "",
    BackPar: "",
    Hole1Par: "", Hole2Par: "", Hole3Par: "", Hole4Par: "", Hole5Par: "", Hole6Par: "", Hole7Par: "", Hole8Par: "", Hole9Par: "", Hole10Par: "", Hole11Par: "", Hole12Par: "", Hole13Par: "", Hole14Par: "", Hole15Par: "", Hole16Par: "", Hole17Par: "", Hole18Par: "", 
    redirect: false
  }

  addCourse = (e) => {
    e.preventDefault();
    console.log(e);

    axios.post('http://localhost:7777/add-course', {
      CourseName: e.target.CourseName.value,
      ClubName: e.target.ClubName.value,
      City: e.target.City.value,
      State: e.target.State.value,
      Country: e.target.Country.value,
      Slope: e.target.Slope.value,
      Rating: e.target.Rating.value,
      Par: e.target.Par.value,
      Holes: e.target.Holes.value,
      FrontPar: e.target.FrontPar.value,
      BackPar: e.target.BackPar.value,
      Hole1Par: e.target.Hole1Par.value, Hole2Par: e.target.Hole2Par.value, Hole3Par: e.target.Hole3Par.value, Hole4Par: e.target.Hole4Par.value, Hole5Par: e.target.Hole5Par.value, Hole6Par: e.target.Hole6Par.value, Hole7Par: e.target.Hole7Par.value, Hole8Par: e.target.Hole8Par.value, Hole9Par: e.target.Hole9Par.value, Hole10Par: e.target.Hole10Par.value, Hole11Par: e.target.Hole11Par.value, Hole12Par: e.target.Hole12Par.value, Hole13Par: e.target.Hole13Par.value, Hole14Par: e.target.Hole14Par.value, Hole15Par: e.target.Hole15Par.value, Hole16Par: e.target.Hole16Par.value, Hole17Par: e.target.Hole17Par.value, Hole18Par: e.target.Hole18Par.value 
    })
    .then((res) => {
      this.setState ({
        redirect: true
      })
    })
  }




  render () {
    if (this.state.redirect){
      return <Redirect to = '/courses' />
    }

    return (
      <section className="add">
        <h1 className="add__title">Add New Course</h1>
      <form onSubmit={this.addCourse}>
        <div className="add__form-cont">
        <div className="add__input-cont">
            <label htmlFor="club-name" className="add__label">Club Name: </label>
            <input type="text" id="ClubName" className="add__form-input" placeholder="Enter Club Name"></input>
          </div>
          <div className="add__input-cont">
            <label htmlFor="course-name" className="add__label">Course Name: </label>
            <input type="text" id="CourseName" className="add__form-input" placeholder="Enter Course Name"></input>
          </div>
          <div className="add__input-cont">
            <label htmlFor="city" className="add__label">City: </label>
            <input type="text" id="City" className="add__form-input" placeholder="Enter City"></input>
          </div>
          <div className="add__input-cont">
            <label htmlFor="Province" className="add__label">Province: </label>
            <input type="text" id="State" className="add__form-input" placeholder="Enter Province"></input>
          </div>
          <div className="add__input-cont">
            <label htmlFor="country" className="add__label">Country: </label>
            <input type="text" id="Country" className="add__form-input" placeholder="Enter Country"></input>
          </div>
          <div className="add__input-cont">
            <label htmlFor="slope" className="add__label">Slope: </label>
            <input type="text" id="Slope" className="add__form-input" placeholder="Slope"></input>
          </div>
          <div className="add__input-cont">
            <label htmlFor="rating" className="add__label">Rating: </label>
            <input type="text" id="Rating" className="add__form-input" placeholder="Rating"></input>
          </div>
          <div className="add__input-cont">
            <label htmlFor="holes" className="add__label">Holes: </label>
            <input type="text" id="Holes" className="add__form-input" placeholder="Holes"></input>
          </div>
        
{/* FRONT */}
        <div className="add__card"> 
          <div className="add__front">
            <div className="add__row">
              <p className="add__c1">Hole</p>
              <p className="add__square">1</p><p className="add__square">2</p><p className="add__square">3</p><p className="add__square">4</p><p className="add__square">5</p><p className="add__square">6</p><p className="add__square">7</p><p className="add__square">8</p><p className="add__square">9</p><p className="add__square">out</p>
            </div>
            <div className="add__row">
              <p className="add__c1">Par</p>
              <input className="add__input" type="text" id="Hole1Par" /><input className="add__input" type="text" id="Hole2Par" /><input className="add__input" type="text" id="Hole3Par" /><input className="add__input" type="text" id="Hole4Par" /><input className="add__input" type="text" id="Hole5Par" /><input className="add__input" type="text" id="Hole6Par" /><input className="add__input" type="text" id="Hole7Par" /><input className="add__input" type="text" id="Hole8Par" /><input className="add__input" type="text" id="Hole9Par" /><input className="add__input" type="text" id="FrontPar" />
            </div>
          </div>
  {/* BACK */}
          <div className="add__back">
          <div className="add__row">
                <p className="add__c1">Hole</p>
                <p className="add__square">10</p><p className="add__square">11</p><p className="add__square">12</p><p className="add__square">13</p><p className="add__square">14</p><p className="add__square">15</p><p className="add__square">16</p><p className="add__square">17</p><p className="add__square">18</p><p className="add__square">In</p><p className="add__square">tot</p>
              </div>
            <div className="add__row">
              <p className="add__c1">Par</p>
              <input className="add__input" type="text" id="Hole10Par" /><input className="add__input" type="text" id="Hole11Par" /><input className="add__input" type="text" id="Hole12Par" /><input className="add__input" type="text" id="Hole13Par" /><input className="add__input" type="text" id="Hole14Par" /><input className="add__input" type="text" id="Hole15Par" /><input className="add__input" type="text" id="Hole16Par" /><input className="add__input" type="text" id="Hole17Par" /><input className="add__input" type="text" id="Hole18Par" /><input className="add__input" type="text" id="BackPar" /><input className="add__input" type="text" id="Par" />
            </div>
          </div>
        </div>
        
        <div className="add__btn-cont">
          <button type="submit" id="add__buttonId" className="add__button">Submit Course</button>
        </div>
        </div>
      </form>
    </section>

    )
  }
}