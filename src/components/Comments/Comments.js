
import {Comment} from "./Comment/Comment";
import './Comments.style.css'
import {useNavigate} from "react-router-dom";


export const Comments = ({comments}) => {

    const navigate = useNavigate()

    return (
        <div className={'comments'}>
            {comments.map(comment=><Comment key={comment.id} comment={comment} navigate={navigate}/>)}
        </div>
    );
};

