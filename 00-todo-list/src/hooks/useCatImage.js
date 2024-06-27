import { useState, useEffect } from "react"


export function useCatImage({random}){
    const [imageUrl, setImageUrl] = useState()
  
    useEffect(() => {
      if(!random) return
      const firstWords = random.split(' ',3).join(' ')
      setImageUrl(`https://cataas.com/cat/says/${firstWords}`)
    },[random])
  
    return {imageUrl}
  
  }