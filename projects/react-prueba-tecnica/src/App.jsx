import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export function App () {
  const { fact, getFactAndUpdateState, firstWord } = useCatFact()
  const { image } = useCatImage({ fact })
  const handleClick = async () => {
    getFactAndUpdateState()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {image && <img src={`${image}/says/${firstWord}`} alt={`Image extracted using the first word for ${fact}`} />}
      {fact && <p>{fact}</p>}
    </main>
  )
}
