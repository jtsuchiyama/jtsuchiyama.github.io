import './Header.css';

function Header() {
    return (
        <header>
            <div>
                <div className="title">Jake Tsuchiyama</div>
                <div className="nav">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/music">Music</a>
                </div>
            </div>
            
        </header>
    )
}

export default Header;  