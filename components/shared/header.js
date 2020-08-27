import { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
    render() {
        return(
            <div className="">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/cv"><a>CV</a></Link>
                <Link href="/blog"><a>Blog</a></Link>
                <Link href="/portfolios"><a>Portfolios</a></Link>
            </div>
        )
    }
}

export default Header;