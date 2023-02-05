import {Component} from "react";

import {postsService} from "../../services";
import {PostClassComponent} from "./PostClassComponent/PostClassComponent";

class PostsClassComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }

    componentDidMount() {
        postsService.getAll().then(({data})=>this.setState({posts:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.posts.map(post=><PostClassComponent key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {
    PostsClassComponent
}