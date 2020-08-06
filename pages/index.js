import React, { useState } from 'react'
import SideMenu from '../components/SideMenu'
import Carousel from '../components/Carousel'
import MovieList from '../components/MovieList'
import { getMovies, getCategories } from '../actions/index'


export default function Home(props) {

  const [filter, setFilter] = useState('all')

  const changeCategory = (category) => {
setFilter(category)
  }

  const filterMovies = (movies) => {
if(filter === 'all'){
  return movies
}
return movies.filter((m) => m.genre && m.genre.includes(filter) )
  }

  return (
    <div className='container'>
          
          <div className="home-page">
                <div className="container">
                    <div className="row">
                      <div className="col-lg-3">
            <SideMenu 
            changeCategory={changeCategory}
            activeCategory={filter}
            categories={props.categories}
            appName="Movie DB" />
                      </div>
                      <div className="col-lg-9">
            <Carousel  images={props.images}/>
  <h1>Displaying {filter} movies</h1>
            <MovieList  movies={filterMovies(props.movies) || []} />
                      </div>
                    </div>
                  </div>
          </div>
    </div>
  )
}

Home.getInitialProps = async (appContext) => {
  console.log('Calling getInitialProps from Home',appContext)
const movies = await getMovies()
const categories = await getCategories()
const images = movies.map(movie => ({
    url:movie.cover,
    id:`image-${movie.id}`,
    title:movie.name
  }))
return {
  movies:movies,
  images:images,
  categories:categories
}
}


// class Home extends Component {

// static async getInitialProps(){
// const movies = await getMovies()
// return {
//   movies:movies
// }
// }

// constructor(props){
//   super(props)
// this.state = {
//   movies:[],
//   errorMessage:''
// }
// }


//  componentDidMount(){
//      getMovies().then(res => {
//       this.setState({movies:res})
//      })
//      .catch((err) => {
// this.setState({
//   errorMessage:err
// })   
//   })
// }


// render(){
//   return (
//     <div className={styles.container}>
//             <Head>
//             <title>Home</title>
//             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//             <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//             <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//           </Head>
//       <Navbar />
//           <div className="home-page">
//                 <div className="container">
//                     <div className="row">
//                       <div className="col-lg-3">
//             <SideMenu  appName="Movie DB" />
//                       </div>
//                       <div className="col-lg-9">
//             <Carousel />
//             <MovieList  movies={this.props.movies} />
//                       </div>
//                     </div>
//                   </div>
//           </div>
//         <Footer />
//         <style jsx>{`
//         .home-page{
//         padding-top:80px;
//         }   
//         `
//         }
//         </style>
//     </div>
//   )
// }
// }

// export default Home