export const customFetch = async (url, options) => {
  try {
    const response = await fetch(url, options)
    return await response.json()
  } catch (error) {
    return error
  }
}
