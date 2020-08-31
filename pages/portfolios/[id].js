import { Component } from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';
import BasePage from '../../components/BasePage';

class Portfolio extends Component {
    static async getInitialProps(query) {
        let post = {}
        const id = query.query.id
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            post = response.data
        } catch(e) {
            console.log(e)
        }
        return { portfolio: post }
    }

    render() {
        const { portfolio } = this.props
        return(
            <BaseLayout>
                <BasePage>
                    <div>I am Portfolio page</div>
                    <h1>{portfolio.title}</h1>
                    <p>{portfolio.body}</p>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);