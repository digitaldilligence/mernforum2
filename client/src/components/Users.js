import React, {Component} from 'react'

class Users extends Component {
    state = {users:[]}
    componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({users}));
  }
  render(){
    return (
        <div>
      <ul className="post-list">
        {this.state.users.map(user =>
            <li key={user.id}>
            <p>Username:{user.username}</p>
            <p>Password: {user.password}</p>
            </li>
          )}
      </ul> 
        </div>
    )
        }
}
export default Users;
