import React from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            username: event.target.username,
            password: event.target.password,
        });
    }

    handleSubmit(event) {
        let navigate = useNavigate();
        navigate('mainpage');
        event.preventDefault();
    }

    render() {
        return (
            <header class="Login-header">
                <h1>
                    This is the login page!
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: <br></br>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <br></br>
                    <label>
                        Password: <br></br>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </header>
        );
    }
}


export default Login;