import React, { Component } from 'react';
import './ScoreCard.scss';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class ScoreCard extends Component {
  
  state = {
    totalScore: "",
    totalPutts: "",
    totalFairways: "",
    totalGirs: "",
    date: "",
    redirect: false,
    courseData: [],
    totalScoreError: ""
  }

  // onChange = (e) => this.setState ({ totalScore: e.target.value });

  validate = () => {
    let totalScoreError = ""

    if (!this.state.totalScore) {
      totalScoreError = "cannot be blank";
    }
    if (totalScoreError) {
      this.setState({ totalScoreError });
      return false;
    }

    return true;
  };

  addScore = (e) => {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }

    // if (this.state.totalScore === "") {
    //   alert("??");
    // }else{
    //   this.props.ScoreCard(this.state.totalScore);
    //   this.setState({ totalScore: ""});
    // }

    axios.post('http://localhost:7777/', {
      totalScore: e.target.totalScore.value,
      totalPutts: e.target.totalPutts.value,
      totalFairways: e.target.totalFairways.value,
      totalGirs: e.target.totalGirs.value,
      date: e.target.date.value
    })
    .then((res) => {
      this.setState ({
        redirect: true
      })
    }) 
  }

 



  componentDidMount() {
    axios.get(`http://localhost:7777/courses/${this.props.match.params.courseid}`)
      .then(res => {
        const courseData = res.data;
        this.setState({
          courseData
        });
      })
  }





  render() {
    // if (this.state.redirect){
    //   return <Redirect to = '/' />
    // }
    return (
      <section className="sc">
        <div className="sc__header">
          <h1 className="sc__title">{this.state.courseData.ClubName}</h1>
          <h3 className="sc__sub-title">{this.state.courseData.CourseName}</h3>
        </div>
        <form onSubmit={this.addScore} className="sc__form">
          <label forHtml="date" className="sc__date-label">Date: </label>
          <input type="date" id="date" name="date"></input>
  {/* FRONT */}
          <div className="sc__cont">
            <div className="sc__front">
              <div className="sc__row">
                <p className="sc__c1">Hole</p>
                <p className="sc__square">1</p><p className="sc__square">2</p><p className="sc__square">3</p><p className="sc__square">4</p><p className="sc__square">5</p><p className="sc__square">6</p><p className="sc__square">7</p><p className="sc__square">8</p><p className="sc__square">9</p><p className="sc__square">out</p>
              </div>
              <div className="sc__row">
                <p className="sc__c1">Par</p>
                <p className="sc__square">{this.state.courseData.Hole1Par}</p><p className="sc__square">{this.state.courseData.Hole2Par}</p><p className="sc__square">{this.state.courseData.Hole3Par}</p><p className="sc__square">{this.state.courseData.Hole4Par}</p><p className="sc__square">{this.state.courseData.Hole5Par}</p><p className="sc__square">{this.state.courseData.Hole6Par}</p><p className="sc__square">{this.state.courseData.Hole7Par}</p><p className="sc__square">{this.state.courseData.Hole8Par}</p><p className="sc__square">{this.state.courseData.Hole9Par}</p><p className="sc__square">{this.state.courseData.FrontPar}</p>
              </div>

              <div className="sc__row">
                <p className="sc__c1">Score</p>
                <input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" />
              </div>

              <div className="sc__row">
                <p className="sc__c1">Putts</p>
                <input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" />
              </div>
  
              <div className="sc__row">
                <p className="sc__c1">Frwys</p>
                <input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" />
              </div>

              <div className="sc__row">
                <p className="sc__c1">GIR</p>
                <input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" />
              </div>
            </div>
  {/* BACK */}
            <div className="sc__back">
              <div className="sc__row">
                <p className="sc__c1">Hole</p>
                <p className="sc__square">10</p><p className="sc__square">11</p><p className="sc__square">12</p><p className="sc__square">13</p><p className="sc__square">14</p><p className="sc__square">15</p><p className="sc__square">16</p><p className="sc__square">17</p><p className="sc__square">18</p><p className="sc__square">in</p><p className="sc__square--last">tot</p>
              </div>
              <div className="sc__row">
                <p className="sc__c1">Par</p>
                <p className="sc__square">{this.state.courseData.Hole10Par}</p><p className="sc__square">{this.state.courseData.Hole11Par}</p><p className="sc__square">{this.state.courseData.Hole12Par}</p><p className="sc__square">{this.state.courseData.Hole13Par}</p><p className="sc__square">{this.state.courseData.Hole14Par}</p><p className="sc__square">{this.state.courseData.Hole15Par}</p><p className="sc__square">{this.state.courseData.Hole16Par}</p><p className="sc__square">{this.state.courseData.Hole17Par}</p><p className="sc__square">{this.state.courseData.Hole18Par}</p><p className="sc__square">{this.state.courseData.BackPar}</p><p className="sc__square--last">{this.state.courseData.Par}</p>
              </div>
              <div className="sc__row">
                <p className="sc__c1">Score</p>
                <input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input--last" type="text" id="totalScore" />
              </div>
              <div className="sc__row">
                <p className="sc__c1">Putts</p>
                <input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input--last" type="text" id="totalPutts" />
              </div>
              <div className="sc__row">
                <p className="sc__c1">Frwys</p>
                <input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input--last" type="text" id="totalFairways" />
              </div>
              <div className="sc__row">
                <p className="sc__c1">GIR</p>
                <input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input" type="text" id="text" /><input className="sc__input--last" type="text" id="totalGirs" />
              </div>
            </div>
          </div>
          <div>{this.state.totalScoreError}</div>
          <div className="sc__btn-cont">
            <button type="submit" id="sc__buttonId" className="sc__button">Submit Your Score!</button>
        </div>
        </form>
      </section>
    )
  }
}

export default ScoreCard;