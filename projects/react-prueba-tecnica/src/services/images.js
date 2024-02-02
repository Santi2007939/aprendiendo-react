export const getRandomImage = async (fact) => {
  if (!fact) return
  const firstWord = fact.split(' ')[0]
  const res = await fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
  const data = await res.json()
  const { _id } = data
  return _id
}
