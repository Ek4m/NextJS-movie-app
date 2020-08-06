import React, { Component } from 'react'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById, updateMovie } from '../../../actions'
import Router from 'next/router'
 class EditMovie extends Component {

    // state = {
    //     movie:{   name:"Some movie",
    //     description:'Some description',
    //     rating:"",
    //     image:'',
    //     cover:'',
    //     longDesc:'',
    //     genre:""
    // }
    // }


   handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updatedMovie) => {
Router.push('/movies/[id]',`/movies/${movie.id}`)
    })
  }


static async getInitialProps(appContext){
    const {id} = appContext.query
const movie = await getMovieById(id)
return {movie}
}



    render() {

        return (
            <div className='container'>
                <h1>Edit the Movie</h1>
                <MovieCreateForm 
                submitButton="Update"
                handleFormSubmit={this.handleUpdateMovie}
                initialData={this.props.movie}/>
            </div>
        )
    }
}

export default EditMovie
