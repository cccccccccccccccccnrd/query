const url = 'http://localhost:3330/query'

export async function get (term) {
  try {
    const response = await fetch(`${url}/${term}`)
    return await response.json()
  } catch(error) {
    console.log(error)
  }
}

export default {
  get
}