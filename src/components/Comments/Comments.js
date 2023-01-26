import {Comment} from "../Comment/Comment";

export const Comments = ({comments}) => {

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

