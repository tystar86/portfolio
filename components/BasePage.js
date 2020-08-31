import { Container } from 'reactstrap';

const BasePage = ({classname = '', children}) => {
    return(
        <div className={`base-page ${classname}`}>
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default BasePage;