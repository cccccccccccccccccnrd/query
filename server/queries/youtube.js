require('dotenv').config()
const fetch = require('node-fetch')

async function youtube (term, limit) {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${term}&part=snippet&eventType=live&maxResults=${limit}&q=news&type=video&key=${process.env.YOUTUBE_KEY}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': process.env.YOUTUBE_TOKEN
    }
  })
  const json = await response.json()
  return json.items.map((stream) => {
    return {
      platform: 'youtube',
      url: `https://www.youtube.com/embed/${stream.id.videoId}`,
      meta: [
        stream.snippet.channelTitle,
        stream.snippet.title,
        stream.snippet.publishTime
      ]
    }
  })
}

module.exports = {
  youtube
}