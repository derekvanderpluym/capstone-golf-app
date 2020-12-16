const fs = require('fs');
const express = require('express');
const router = express.Router();
const scoreData = './data/scoreData.json';
const { v4: uuid } = require('uuid');


const readData = (filename) => {
  return JSON.parse(fs.readFileSync(`./data/${filename}.json`))
}

const writeData = (filename, data) => {
  return fs.writeFileSync(`./data/${filename}.json`, JSON.stringify(data, null, 4))
};


// get score data
router.get('/score-data', (req, res) => {
  const data = fs.readFileSync(scoreData);
  res.status(200).json(JSON.parse(data));
});


// post score data
router.post('/', (req, res) => {
  const { totalScore, totalPutts, totalFairways, totalGirs, date } =req.body;
  const id = uuid();
  const newScoreData = readData('scoreData');

  newScoreData.push({
    id, 
    totalScore,
    totalPutts,
    totalFairways,
    totalGirs,
    date
  });

  writeData('scoreData', newScoreData);

  res.json(newScoreData)
})

module.exports = router;