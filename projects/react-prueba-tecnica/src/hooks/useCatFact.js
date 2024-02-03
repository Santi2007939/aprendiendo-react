import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()
  const getFactAndUpdateState = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(getFactAndUpdateState, [])
  const firstWord = fact?.split(' ')[0]

  return { fact, getFactAndUpdateState, firstWord }
}
