import {Component} from "react";

class CommentClassComponent extends Component{
    render() {
        const {postId, id, name, email, body} = this.props.comment;
        return(
            <div>
                <div>Post Id - {postId}</div>
                <div>Id - {id}</div>
                <div>Name - {name}</div>
                <div>Email - {email}</div>
                <div>Body - {body}</div>
                <hr/>
            </div>
        )
    }
}

export {
    CommentClassComponent
}