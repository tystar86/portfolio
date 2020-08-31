import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import axios from 'axios';

const Portfolio = ({portfolio}) => {
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

Portfolio.getInitialProps = async ({query}) => {
    let post = {}
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
        post = response.data;
        console.log({post})
    } catch(e) {
        console.log(e)
    }
    return { portfolio: post }
}

export default Portfolio;
