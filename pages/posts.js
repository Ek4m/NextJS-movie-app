import React, { Component } from 'react'
import { getPosts } from '../actions'

 class Posts extends Component {

static async getInitialProps(){
  const posts = await getPosts()
  return {posts}  
}



    render() {
        const {posts} = this.props 
        return (
            <div className="container">
                <h1>I'm posts page.</h1>
                <ul >
              {posts.map(post => (
                      <li key={post.id}>{post.title}</li>                 
              ))}
                                </ul>
            </div>
        )
    }
}

export default Posts