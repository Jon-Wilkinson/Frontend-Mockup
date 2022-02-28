import {Link} from 'react-router-dom';

function Login() {
    return (
        <header>
            <h1>
                This is the login page
            </h1>
            <Link to='/'>Back to Main Page</Link>
        </header>
        
    );
}


export default Login;