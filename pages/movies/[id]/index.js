import React from 'react'
import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../../actions/index'
import Link from 'next/link'


const Movie = (props) => {
    const router = useRouter()
    const {id} = router.query

const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
router.push('/')
    })
}

    return (
        <div className="jumbotron">
        <h1 className="display-4">{props.movie.name}</h1>
    <p className="lead">{props.movie.description}</p>
        <hr className="my-4" />
    <h3>{props.movie.genre}</h3>
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    <button 
    onClick={() => handleDeleteMovie(id)}
    className=" ml-1 btn btn-danger btn-lg" >Delete Movie</button>
<Link href="/movies/[id]/edit" 
as={`/movies/${id}/edit`}>
<button 
    className=" ml-1 btn btn-warning btn-lg" >
        Edit
    </button></Link>

    <p>{props.movie.longDesc}</p>

      </div>
    )
}

Movie.getInitialProps = async (context) => {
    console.log("Context",context)
const movie = await getMovieById(context.query.id)
return {movie:movie}
}

export default Movie
