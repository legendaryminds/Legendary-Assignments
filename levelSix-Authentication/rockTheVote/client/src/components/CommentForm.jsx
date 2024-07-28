import { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function CommentForm({ issueId }) {
    const { addComment } = useContext(UserContext);
    const [commentText, setCommentText] = useState("");

    function handleChange(e) {
        setCommentText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addComment({ text: commentText, issueId });
        setCommentText("");
    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="comment"
                value={commentText}
                onChange={handleChange}
                placeholder="Add a comment"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}
