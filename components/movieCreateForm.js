import React, { useState, useEffect } from 'react'

const MovieCreatehtmlForm = (props) => {
  const [isInitialDataLoaded, setInitialDataLoaded] = useState(false)
  const formData = props.initialData ?  {...props.initialData} :{
    name:"Some movie",
    description:'Some description',
    rating:"",
    image:'',
    cover:'',
    longDesc:'',
    genre:""
}
// const [htmlForm, sethtmlForm] = useState(formData)
const [htmlForm, sethtmlForm] = useState({
  name:"Some movie",
  description:'Some description',
  rating:"",
  image:'',
  cover:'',
  longDesc:'',
  genre:""
})
    
useEffect(() => {
  if(props.initialData){
    sethtmlForm(props.initialData)
    setInitialDataLoaded(true)
  }
}, [props.initialData])

const handleChange = (event) => {
const target = event.target
const name = target.name
sethtmlForm({
    ...htmlForm,
    [name]: target.value
  })
}
const handleGenreChange = (event) => {
    const { options } = event.target
    const optionsLength = options.length
    let value = []

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }

    sethtmlForm({
        ...htmlForm,
        genre: value.toString()
      })
  }

  const submithtmlForm = () => {
    props.handleFormSubmit({...htmlForm})
  }
  console.log(htmlForm)
    return (
        <form>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
            onChange={handleChange}
            name="name"
            type="text"
            value={htmlForm.name}
             className="form-control" 
             id="name" aria-describedby="emailHelp" 
             placeholder="Lord of the Rings"
              />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
            onChange={handleChange}
             type="text"
             value={htmlForm.description}
              className="form-control"
              id="description"
              name="description"
              placeholder="Somewhere in Middle-earth..." 
                />
        </div>
        <div className="form-group">
            <label htmlFor="description">Rating</label>
            <input
            onChange={handleChange}
                        value={htmlForm.rating}
             type="number"
              max="5" 
              name="rating"
              min="0" 
              className="form-control"
               id="rating" 
               placeholder="3"
                />
            <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
        </div>
        <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
            onChange={handleChange}
                        value={htmlForm.image}
             type="text"
              className="form-control" 
              id="image" 
              name="image"

              placeholder="http://....." 
              />
        </div>
        <div className="form-group">
            <label htmlFor="cover">Cover</label>
            <input
            onChange={handleChange}
                        value={htmlForm.cover}
            type="text"
            name="cover"
             className="form-control"
              id="cover"
               placeholder="http://......" 
               />
        </div>
        <div className="form-group">
            <label htmlFor="longDesc">Long Description</label>
            <textarea
            onChange={handleChange}
             className="form-control"
              id="longDesc" 
              rows="3"
              name="longDesc"

              value={htmlForm.longDesc}
              ></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select
             multiple
             onChange={handleGenreChange}
                           className="form-control" id="genre">
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
            </select>
        </div>
        <button 
        onClick={submithtmlForm} 
        type="button" 
        className="btn btn-primary">
          {props.submitButton || 'Create'}
          </button>
        </form>
    )
}

export default MovieCreatehtmlForm
