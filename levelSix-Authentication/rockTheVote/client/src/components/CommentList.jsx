import React from "react";
import Comment from "./Comment";

export default function CommentList({ comments = [] }) {
    const commentElements = comments.map(comment => (
        <Comment {...comment} key={comment._id} />
    ));

    return (
        <div>
            {comments.length > 0 ? commentElements : <p>No comments to display.</p>}
        </div>
    );
}