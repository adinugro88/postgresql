import React, {Component}from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component{
    state={
        posts:[ ]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
            this.setState({
                posts : res.data.slice(0,20)
            })
        })
    }

   render(){
       const {posts} = this.state;
       const postlist = posts.length ?(
           posts.map(post=>{
               return(
                   <div className="collection center section" key={post.id}>
                   <div className="collection-item ">
                   <img src={Pokeball} alt='a pokeball'/>
                   <Link to={'/'+ post.id} >
                   <button className="waves-effect waves-light btn">{post.id}</button>
                   </Link>
                   <h5>{post.title}</h5>
                    <span> {post.body}</span>
                    </div>
                   </div>
               )
           })
       ) : (
           <div className='container'></div>
       )
    return (
        <div className='container home'>
            <h1 className='center blue-text'>Home</h1>
           {postlist}
        </div>
    )
   }
}

export default Home