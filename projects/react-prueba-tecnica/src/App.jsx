import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

export function App () {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        setImage(_id)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {image && <img src={`${CAT_PREFIX_IMAGE_URL}${image}/says/${fact.split(' ')[0]}`} alt={`Image extracted using the first word for ${fact}`} />}
      {fact && <p>{fact}</p>}
    </main>
  )
}
