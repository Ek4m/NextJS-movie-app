import Axios from "axios"


export default (req,res) => {
    if(req.method === 'POST'){
const postData = JSON.parse(req.body)
console.log(postData)
return res.json({
    status:'Saving post to DB',
postData
})
    }else{
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.splice(0,20)
            return res.json(posts)
        })
    }

}