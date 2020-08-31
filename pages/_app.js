import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class MyApp extends Component {
  static async getInitialProps({Component, contex}) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(contex);

    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}

export default MyApp;
