import './App.css'
import { useMovies } from './hooks/useMovies'
import Movies from './components/Movies'
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch (){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  
  useEffect(() =>{

    if(isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)


  },[search])

  return {search, error, updateSearch}
}

function App() {
  const [sort, setSort] = useState(false)

  const {search, error, updateSearch} = useSearch()

  const {movies: MappedMovies,loading, getMovies} = useMovies({search, sort})

  const debounceGetMovies = useCallback(debounce(search=>{
    console.log('search',search)
    getMovies({search})
  }, 300)
  ,[getMovies]) 


  const handleSubmit = (event) =>{
    event.preventDefault()
    getMovies({search})
  }
  
  const handleChange = (event) =>{
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () =>{
    setSort(!sort)
  }


  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange} name='query' value={search} type="text" placeholder='Avenger, matrix, star wars' />
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <button type='submit'> buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando ...</p> : <Movies movies={MappedMovies}/>
        }
      </main>
    </div>
  )
}

export default App
