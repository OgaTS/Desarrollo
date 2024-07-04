function ListOfMovies ({movies}){

    return(
        <ul className="movies">
            {
                movies.map(result =>(
                    <li className="movie" key={result.id}>
                        <h3>{result.title}</h3>
                        <p> {result.year}</p> 
                        <img src={result.poster} alt={result.title}/> 
                    </li>
                ))
            }
        </ul>
    )
}

function NoMovies(){
    return(
        <p>No se han encontrado Peliculas para esta seccion</p>
    )
}


const Movies = ({movies}) => {
    const fullMovies = movies?.length > 0

    return(
        fullMovies ? <ListOfMovies movies={movies} /> : <NoMovies />
    )
}   

export default Movies