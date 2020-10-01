const path = require('path')
const express = require('express')
const cors = require('cors')
const queries = require('./queries')

const state = {
  limit: 10,
  platforms: [
    'twitch',
    'youtube'
  ]
}

const app = express()
app.use(cors())

const port = 3330

app.set('json spaces', 2)

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/query/:term', async (req, res) => {
  const term = req.params.term
  console.log(term)

  const streams = (await Promise.all(state.platforms.map(async (platform) => await queries[platform](term, state.limit)))).flat()
  const platforms = [...new Set(streams.map((stream) => stream.platform))]

  res.json({
    platforms,
    streams
  })
})

app.listen(port, () => console.log(`query serving on ${port}`))