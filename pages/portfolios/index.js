import { Component } from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/link';
import BasePage from '../../components/BasePage';

class Home extends Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = response.data
    } catch(e) {
      console.log(e)
    }
    return { posts: posts.slice(0, 10) };
  }
  
  renderPosts(posts) {
    return posts.map(post => 
      <li key={post.id} style={{'fontSize': '20px'}}>
        <Link as={`/portfolios/${post.id}`} href={'/portfolios/[id]'}><a>{post.title}</a></Link>
      </li>)
  }
    render() {
      const posts = this.props.posts

      return(
        <BaseLayout>
          <BasePage>
            <h1>Portfolios page</h1>
            <ul>
              {this.renderPosts(posts)}
            </ul>
          </BasePage>
        </BaseLayout>
      )
    }
  }
  
  export default Home;