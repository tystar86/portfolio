import { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Home extends Component {
    render() {
      return(
        <BaseLayout>
          <BasePage>
            <h1>About page</h1>
          </BasePage>
        </BaseLayout>
      )
    }
  }
  
  export default Home;