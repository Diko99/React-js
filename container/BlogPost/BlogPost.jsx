import React, { Component,Fragment } from 'react'
import './BlogPost.css'
import Post from '../post/Post'
import axios from 'axios'


class BlogPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            Blogpost: {
                id : 1,
                title: '',
                body: '',
                userId: 1
            }
        }
    }

    postToAPI = () => {
        this.getPostAPI()
        axios.post('http://localhost:4000/posts', this.state.Blogpost)
        .then((result) => {
            this.getPostAPI()
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });
    }

    handlesubmit = () => {
        this.postToAPI()
    }

    handleGetValue = e => {
        let BlogPostNew = {...this.state.Blogpost} //create newvariabel and copy {...this.state.Blogpost} to BlogpostNew 
        BlogPostNew[e.target.name] = e.target.value // BlogPostNew[e.target.name] shoot target to e.target.value
        let timeStimp = new Date().getTime() //set id using date.time
        BlogPostNew['id'] = timeStimp //set id using date.time
        this.setState({
            Blogpost: BlogPostNew //Blogpost equail with BlogPostNew
        }, () =>{
            // console.log("this state blogpostnew", this.state.Blogpost)
        })
    }

    getPostAPI = () =>{
        axios.get('http://localhost:4000/posts?_sort=id&_order=desc')
        .then((res)=>{
            this.setState({
                post: res.data
            })
            console.log("New API!")
        })
    }
    
    componentDidMount(){
       this.getPostAPI() //return method  getPostAPI()
    }
    
    HandleRemoveAPI = (data) => {
        axios.delete(`http://localhost:4000/posts/${data}`)
        .then((result) => {
            this.getPostAPI(result)    
        })
        console.log("Delete success!")
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                <h1>Blogpost API</h1><hr /><br />
                        <label htmlFor="title">Title</label><br />
                        <input type="text" id="title" name="title" onChange={this.handleGetValue} /><br/>
                        <label htmlFor="body">Description</label>
                        <textarea rows="4" name="body" id="title" cols="50"  onChange={this.handleGetValue}>
                        </textarea>
                        <button className="btn btn-success" onClick={this.handlesubmit}>save</button>
                    {
                        this.state.post.map(post=>{
                            return <Post key={post.id} data={post}  userId={post.userId} remove={this.HandleRemoveAPI}/> 
                        })
                    }
                    </div>
                    </Fragment>
                )
            }
        }

export default BlogPost
