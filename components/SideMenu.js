import React, { useState } from 'react'
import {useRouter} from 'next/router'
import Modal from './Modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions'

const SideMenu = (props) => {
  let modal = null

const router = useRouter()

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal()
router.push('/')
    })
  }

    return (
        <div>
      <Modal ref={ele => modal = ele} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
<h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
              {props.categories.map(c => (
              <a 
              onClick={() => props.changeCategory(c.name)}
              key={c.id}
              href="#"
               className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}
               >{c.name}</a>
              ))}
         
            </div>
</div>
    )
}

export default SideMenu