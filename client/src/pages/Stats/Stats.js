import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import './Stats.scss';


export default class Stats extends Component {

  state = {
    scoreData: []
  }
  
  componentDidMount() {
    axios.get('http://localhost:7777/score-data')
      .then(res => {
        const scoreData = res.data
        this.setState({
          scoreData
        });
        console.log(scoreData)
      })
  }


  render() {

    const labels = this.state.scoreData.map((object => {
      return object.date
    }));
    
    
    console.log(this.state.scoreData)


    const totalScore = this.state.scoreData.map((object => {
      return object.totalScore
    }));


    const totalScoreData = {
      labels,
      datasets: [
        {
          label: 'Shots',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(0,0,0,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: totalScore
        }
      ]
    }

    const totalPutts = this.state.scoreData.map((object => {
      return object.totalPutts
    }));

    const totalPuttsData = {
      labels,
      datasets: [
        {
          label: 'Shots',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(0,0,0,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: totalPutts
        }
      ]
    }

    const totalFairways = this.state.scoreData.map((object => {
      return object.totalFairways
    }));

    const fairwaysData = {
      labels,
      datasets: [
        {
          label: 'Shots',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(0,0,0,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: totalFairways
        }
      ]
    }

    const totalGirs = this.state.scoreData.map((object => {
      return object.totalGirs
    }));

    const girsData = {
      labels,
      datasets: [
        {
          label: 'Shots',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(0,0,0,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: totalGirs
        }
      ]
    }

    return (
      <section className="stats">
        <h1 className="stats__title">My Stats</h1>
        <div className="stats__chart-cont"> 
          <div className="stats__chart">
            <Line
              data={totalScoreData}
              options={{
                title:{
                  display:true,
                  text:'Score',
                  fontSize:20,
                },
                legend:{
                  display:false,
                  position:'right'
                }
              }}
            />
          </div>
          <div className="stats__chart">
            <Line
              data={totalPuttsData}
              options={{
                title:{
                  display:true,
                  text:'Putts Per Game',
                  fontSize:20,
                },
                legend:{
                  display:false,
                  position:'right'
                }
              }}
            />
          </div>
          <div className="stats__chart">
            <Line
              data={fairwaysData}
              options={{
                title:{
                  display:true,
                  text:'Fairways Per Game',
                  fontSize:20,
                },
                legend:{
                  display:false,
                  position:'right'
                }
              }}
            />
          </div>
          <div className="stats__chart">
            <Line
              data={girsData}
              options={{
                title:{
                  display:true,
                  text:'Greens in Regulation',
                  fontSize:20,
                },
                legend:{
                  display:false,
                  position:'right'
                }
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}



