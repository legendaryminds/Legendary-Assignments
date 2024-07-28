import { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";

// CommentForm component for adding new comments to an issue
export default function CommentForm({ issueId }) {
    // Get addComment function from UserContext
    const { addComment } = useContext(UserContext);
    
    // State for managing comment text input
    const [commentText, setCommentText] = useState("");

    // Handle input change for the comment text
    function handleChange(e) {
        setCommentText(e.target.value);
    }

    // Handle form submission to add a new comment
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
