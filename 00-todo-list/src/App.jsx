import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'


const App = () => {
  
  const {random, refreshFact} = useCatFact()
  const {imageUrl} = useCatImage({random})

  const handleClick = async () =>{
    refreshFact()
  }

  return (  
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>new random</button>
      <section>
        {random && <p>{random}</p>}
        {imageUrl && <img src={imageUrl} alt={`Imagen extraida de ${random}`} />}
      </section>
    </main>
  )
}

export default App
