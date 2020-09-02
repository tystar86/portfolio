import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetData } from '../../actions';
import { useRouter } from 'next/router';

const Portfolio = () => {
    const router = useRouter();
    const { data, error, loading } = useGetData(`/api/posts/${router.query.id}`);
    return(
        <BaseLayout>
            <BasePage>
                <div>I am Portfolio page</div>
                {data &&
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.body}</p>
                    </div>}
                {error && <div className="alert alert-danger">{error.message}</div>}
                {loading && <div>Loading...</div>}
            </BasePage>
        </BaseLayout>
    )
}

export default Portfolio;
