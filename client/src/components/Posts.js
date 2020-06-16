import React, {Component} from 'react'

class Posts extends Component {
    state = {posts:[]}
    componentDidMount(){
        fetch('/posts')
        .then(res => res.json())
        .then(posts=> this.setState({posts}));
  }
    render(){
        return (
            <div className="container">
               <h1>Posts</h1>
               <ul className="post-list">
            {this.state.posts.map(post =>
                <li key={post.id}>
                    <div className="post">
                    <h3>{post.title}</h3>
                    <p>{post.username}</p>
                    <p className="post-body">{post.content}</p>
                    </div>
                </li>
              )}
              </ul>
            </div>
            
        )
            }
}

export default Posts;
