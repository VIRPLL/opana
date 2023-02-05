import {Component} from "react";

import {commentsService} from "../../services";
import {CommentClassComponent} from "./CommentClassComponent/CommentClassComponent";

class CommentsClassComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }
    componentDidMount() {
        commentsService.getAll().then(({data})=>this.setState({comments:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.comments.map(comment=><CommentClassComponent key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {
    CommentsClassComponent
}