const url = 'http://localhost:3330/query'

export async function get (term, limit) {
  try {
    const response = await fetch(limit ? `${url}/${term}/${limit}` : `${url}/${term}`)
    return await response.json()
  } catch(error) {
    console.log(error)
  }
}

export default {
  get
}