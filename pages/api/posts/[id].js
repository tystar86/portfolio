import axios from 'axios';

async function getPostByID(request, response) {
    try {
      const axiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${request.query.id}`)
      const post = axiosResponse.data
      response.status(200).json(post);
    } catch(error) {
      console.log(error)
      response.status(error.status || 400).json({message: "API error"});
    }
}

export default getPostByID;