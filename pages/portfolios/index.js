import Link from 'next/link';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetData } from '../../actions';

const Portfolios = () => {
  const { data, error, loading } = useGetData('/api/posts');
  const renderData = (data) => {
    return data.map(d => 
      <li key={d.id} style={{'fontSize': '20px'}}>
        <Link as={`/portfolios/${d.id}`} href={'/portfolios/[id]'}><a>{d.title}</a></Link>
      </li>)
  }

  return(
    <BaseLayout>
      <BasePage>
        <h1>Portfolios page</h1>
        { loading && <div>Loading...</div> }
        { data && <ul>{renderData(data)}</ul> }
        { error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  )
  }
  
export default Portfolios;

