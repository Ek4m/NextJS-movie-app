const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const filePath = './movies.json'
const movieData = require(filePath)

const dev = process.env.NODE_ENV !== 'production' 
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
server.use(bodyParser.json()) 


    server.get('/api/v1/movies',(req,res) => {
    return   res.json(movieData)
    })

    server.get('/api/v1/movies/:id',(req,res) => {
        const id = req.params.id
        const movie = movieData.find(movie => movie.id === id)            
        return   res.json(movie)
        })    

    server.post('/api/v1/movies',(req,res) => {
        const movie = req.body
        movieData.push(movie)
        const pathToFile = path.join(__dirname, filePath)
        console.log("Path to File ",pathToFile)
        const stringiFiedData = JSON.stringify(movieData,null,2)
        fs.writeFile(pathToFile, stringiFiedData, (err) => {
if(err){
    return res.status(422).send(err)
}
return   res.json('Movie added.')

        })
        })

            server.delete('/api/v1/movies/:id',(req,res) => {
                const id = req.params.id
                const movieIndex = movieData.findIndex(movie => movie.id === id)
                movieData.splice(movieIndex, 1)
                const pathToFile = path.join(__dirname, filePath)
                console.log("Path to File ",pathToFile)
                const stringiFiedData = JSON.stringify(movieData,null,2)
                fs.writeFile(pathToFile, stringiFiedData, (err) => {
        if(err){
            return res.status(422).send(err)
        }
        return   res.json('Movie added.')        
                })
                })    
    
                server.patch('/api/v1/movies/:id',(req,res) => {
                    const id = req.params.id
                    const movie = req.body
                    const movieIndex = movieData.findIndex(movie => movie.id === id)
                    movieData.splice(movieIndex, 1,movie)
                    const pathToFile = path.join(__dirname, filePath)
                    console.log("Path to File ",pathToFile)
                    const stringiFiedData = JSON.stringify(movieData,null,2)
                    fs.writeFile(pathToFile, stringiFiedData, (err) => {
            if(err){
                return res.status(422).send(err)
            }
            return   res.json(movie)        
                    })
                    })    


    // server.get("*",(req,res) => {
    //     return handle(req,res)
    // })

    // server.post("*",(req,res) => {
    //     return handle(req,res)
    // })

    const PORT = process.env.PORT || 3000
    server.use(handle).listen(PORT, (err) => {
        if(err) throw err
        console.log('> Ready on port ', PORT)
    })
})