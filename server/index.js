const path = require('path')
const express = require('express')
const cors = require('cors')
const query = require('./query.js')

const app = express()
app.use(cors())

const port = 3330

app.set('json spaces', 2)

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/query/:term', async (req, res) => {
  const term = req.params.term
  console.log(term)
  query.twitch()
  
  res.json([{
    platform: 'Twitch',
    term: term,
    url: 'https://player.twitch.tv/?kennybeats&parent=localhost',
    meta: [
      'Twitch',
      'kennybeats',
      'SUNDAY MORNING',
      '0:53:18'
    ]
  }, {
    platform: 'Twitch',
    term: term,
    url: 'https://player.twitch.tv/?kennybeats&parent=localhost',
    meta: [
      'Twitch',
      'kennybeats',
      'SUNDAY MORNING',
      '0:53:18'
    ]
  }])
})

app.listen(port, () => console.log(`query serving on ${port}`))