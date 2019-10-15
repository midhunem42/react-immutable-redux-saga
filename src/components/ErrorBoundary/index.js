import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        this.setState({
            error: error,
            errorInfo: info
        })
        // console.error(error);
        // console.info(info);
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>Oops!</h1>
                        </div>
                        <h2>404 - Page not found</h2>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        {/* <a href="#">Go To Homepage</a> */}
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;