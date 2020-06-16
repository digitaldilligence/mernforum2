import React, {Component} from 'react'

class Login extends Component{
    state = {
        username: null,
        password: null,
        authenticated: false
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        fetch('/users')
        .then(res => res.json())
        .then(users => users.forEach(user =>{
            if(user.username===this.state.username && user.password === this.state.password){
                this.setState({
                    authenticated: true
                })
            }
        }));
        
        

    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="username" id="username" name="username"/>
                    <input onChange={this.handleChange} type="password" placeholder="password" id="password" name="password"/>
                    <button>Login</button>
                </form>
                <div>{this.state.authenticated.toString()}</div>
            </div>
        )
    }
}

export default Login;