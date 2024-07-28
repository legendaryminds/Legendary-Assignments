import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

// Comment component for displaying and editing comments
export default function Comment(props) {
  // Destructure props to get comment details
  const { text, username, _id } = props;
  
  // Get user context and functions from UserProvider
  const { user, deleteComment, updateComment } = useContext(UserContext);
  
  // State for managing edit mode and edited text
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  // Check if the logged-in user is the owner of the comment
  let isUser = props.userId === user._id;

  // Handle input change for the edit form
  function handleEditChange(e) {
    setEditText(e.target.value);
  }

  // Handle update comment submission
  async function handleUpdate(e) {
    e.preventDefault();
    await updateComment(_id, { text: editText });
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editText}
            onChange={handleEditChange}
            placeholder="Edit your comment"
          />
          <button type="submit">Update</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <p>{username}: {text}</p>
      )}
      {isUser && !isEditing && (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteComment(_id)}>Delete</button>
        </>
      )}
    </div>
  );
}
