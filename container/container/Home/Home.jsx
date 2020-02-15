import React, { Component } from 'react'
// import Products from '../../container/product/products'
// import YoutubeCom from '../../component/YoutubeCom/YoutubeCom'
// import LifecycleComp from '../lifecycleComp/lifecycleComp'
import BlogPost from '../BlogPost/BlogPost'

class Home extends Component {
    // state = {
    //     number: true
    // }
    // componentDidMount(){
    //     console.log("Home ! component did mount");
    //     // setTimeout(() => {
    //     //     this.setState({
    //     //         number: false   
    //     //     })
    //     // }, 10000);
    // }

    render() {
        return (
            <div className="container">
            {/* YoutubeComp */}
            {/* < YoutubeCom name="Diko Mahendra" title="Frontend Dev" time="21.22"/>
            < YoutubeCom name="Indri Lestari" title="Backend Dev" time="12.23"/>
            < YoutubeCom name="Mira wiranti"  title="UI/UX" time="10.21"/>
            < YoutubeCom /> */}
            {/* card Production {statefull, stateless} */}
            {/* <Products /> */}
            {/* <p>LifeCycle Component</p>
            <hr/>
            {
                this.state.number ?
                <LifecycleComp /> : null 
            } */}
            <BlogPost />
            </div>
        )
    }
}

export default Home