import './Header.css';

function Header() {
    return (
        <nav>
            <div className="links links-left">
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
            </div>
            <div className="title">Jake Tsuchiyama</div>
            <div className="links links-right">
                <a href="/music">Music</a>
                <a href="/aboutme">More About Me</a>
            </div>
        </nav>
    )
}

export default Header;  