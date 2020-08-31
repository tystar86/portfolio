import { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
    render() {
        return(
            <div className="">
                <p className="first-style">I am styled</p>
                <p className="style-from-file">I am styled</p>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a style={{'fontSize': '20px'}}>About</a></Link>
                <Link href="/cv"><a>CV</a></Link>
                <Link href="/blog"><a>Blog</a></Link>
                <Link href="/portfolios"><a>Portfolios</a></Link>
            <style jsx>{`
                .first-style {
                    font-size: 20px;
                    color: red;
                }
            `}</style>
            </div>
        )
    }
}

export default Header;