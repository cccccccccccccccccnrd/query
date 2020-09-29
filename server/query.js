require('dotenv').config()
const fetch = require('node-fetch')

async function twitch () {
  console.log(process.env.TWITCH_AUTH)
  const response = await fetch('https://api.twitch.tv/helix/streams', {
    headers: {
      'Authorization': `Bearer ${process.env.TWITCH_AUTH}`,
      'Client-Id': process.env.TWITCH_ID
    }
  })
  const json = await response.json()
  console.log(json)
}

module.exports = {
  twitch
}
