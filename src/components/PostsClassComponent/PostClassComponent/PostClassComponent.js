import {Component} from "react";

class PostClassComponent extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {userId, id, title, body} = this.props.post;
        return(
            <div>
                <div>User Id - {userId}</div>
                <div>Id - {id}</div>
                <div>Title - {title}</div>
                <div>Body - {body}</div>
                <hr/>
            </div>
        )
    }
}

export {
    PostClassComponent
}