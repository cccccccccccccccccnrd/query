require('dotenv').config()
const fetch = require('node-fetch')

async function twitch (term, limit) {
  const response = await fetch(`https://api.twitch.tv/kraken/search/streams?query=${term}&limit=${limit}`, {
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Client-Id': process.env.TWITCH_ID
    }
  })
  const json = await response.json()
  return json.streams.map((stream) => {
    return {
      platform: 'twitch',
      url: `https://player.twitch.tv/?channel=${stream.channel.name}&parent=localhost&autoplay=false`,
      meta: [
        stream.channel.display_name,
        stream.viewers,
        stream.channel.status,
        stream.channel.language,
        stream.created_at
      ]
    }
  })
}

module.exports = {
  twitch
}