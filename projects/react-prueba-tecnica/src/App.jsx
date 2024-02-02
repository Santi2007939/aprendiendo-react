import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { getRandomImage } from './services/images'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

function useCatImage () {
  
}

export function App () {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    getRandomImage(fact).then(newImage => setImage(newImage))
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {image && <img src={`${CAT_PREFIX_IMAGE_URL}${image}/says/${fact.split(' ')[0]}`} alt={`Image extracted using the first word for ${fact}`} />}
      {fact && <p>{fact}</p>}
    </main>
  )
}
