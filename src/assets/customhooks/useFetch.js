import { useEffect, useState } from 'react'

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState([])

  useEffect(() => {
    const checkIfPropsExistsAndFetch = async () => {
      try {
        const response = await fetch(url, options)
        const json = await response.json()
        setResponse(json)
      } catch (err) {
        setError(...error, [error])
      }
    }
    checkIfPropsExistsAndFetch()
  }, [])

  return { response, error }
}

export default useFetch
