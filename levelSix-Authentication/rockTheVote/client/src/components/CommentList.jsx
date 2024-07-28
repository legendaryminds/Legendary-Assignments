import React from "react";
import Comment from "./Comment";

// CommentList component to render a list of comments
export default function CommentList({ comments = [] }) {
    // Create an array of Comment components for each comment in the comments array
    const commentElements = comments.map(comment => (
        <Comment {...comment} key={comment._id} />
    ));

    return (
        <div>
            {/* Render comments if available, otherwise display a message */}
            {comments.length > 0 ? commentElements : <p>No comments to display.</p>}
        </div>
    );
}
