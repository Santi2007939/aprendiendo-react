import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/images'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()
  useEffect(() => {
    getRandomImage(fact).then(newImage => setImage(newImage))
  }, [fact])
  return { image: `${CAT_PREFIX_IMAGE_URL}${image}` }
}
