import axios from 'axios';

async function getPosts(request, response) {
    try {
      const axiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const posts = axiosResponse.data
      response.status(200).json(posts.slice(0, 10));
    } catch(error) {
      console.log(error)
      response.status(error.status || 400).json({message: "API error"});
    }
}

export default getPosts;