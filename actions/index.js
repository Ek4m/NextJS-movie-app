import axios from 'axios'

const MOVIE_DATA = []
const BASE_URL = 'http://localhost:3000'
const CATEGORY_DATA = [
    {id:'c-1',name:'all'},
    {id:'c-2',name:'adventure'},
    {id:'c-3',name:'historical'},
    {id:'c-4',name:'action'},
    {id:'c-5',name:'drama'},
  ]


  export const getCategories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(CATEGORY_DATA)
        // reject("Cannot fetch  data!")
      }, 100)
    })
 
  }
  export const getMovies = () => {
    return axios.get(`${BASE_URL}/api/v1/movies`).then(res => {
      return res.data
    }) 
  }


  export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5)
return axios.post(`${BASE_URL}/api/v1/movies`,movie).then(res => {
  return res.data
}) 
  }



  export const getMovieById = (id) => {
return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
  }


  export const updateMovie = (movie) => {
    return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`,movie).then(res => res.data)
      }
    

  export const deleteMovie = (id) =>{
    return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
  }

  export const getPosts = (id) =>{
    return axios.get(`${BASE_URL}/api/v1/posts`).then(res => res.data)
  }
