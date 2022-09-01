import './NoRoute.css';

function NoRoute() {
    return (
        <div className="noroute">
            <div className="noroute-headline">404</div>
            <p className="not-found">Oops! 404 Page Not Found</p>
            <p className="sorry">Sorry, the page you are looking for does not exist.</p>
            <p><a href="/">Return Home</a></p>
        </div>
    )
}

export default NoRoute;
