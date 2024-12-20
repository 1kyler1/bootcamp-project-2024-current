import { IComment } from "@/database/blogSchema";
import styles from "./commentView.module.css"


type CommentProps = {
    comment: IComment;
}

function parseCommentTime(time: Date){
    const year: number = time.getFullYear();
    const month: number = time.getMonth() + 1; // Months are zero-based
    const day: number = time.getDate();

    return `${month}/${day}/${year}`
}    
   

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(new Date(comment.date))}</span>
        </div>
    );
}





export default Comment;