import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function Issue(props) {
  const { title, description, imgUrl, userId, username, _id, upvotes, downvotes } = props;
  const { user, handleUpvote, handleDownvote, getComments, deleteIssue, updateIssue } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editImgUrl, setEditImgUrl] = useState(imgUrl);

  useEffect(() => {
    async function fetchComments() {
      const commentsData = await getComments(_id);
      setComments(commentsData);
    }
    fetchComments();
  }, [_id, getComments]);

  let isUser = userId === user._id;

  function handleEditChange(e) {
    const { name, value } = e.target;
    if (name === "editTitle") setEditTitle(value);
    if (name === "editDescription") setEditDescription(value);
    if (name === "editImgUrl") setEditImgUrl(value);
  }

  async function handleUpdate(e) {
    e.preventDefault();
    await updateIssue(_id, { title: editTitle, description: editDescription, imgUrl: editImgUrl });
    setIsEditing(false);
  }

  function handleRemoveImage() {
    setEditImgUrl('');
  }

  return (
    <div className="issue">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="editTitle"
            value={editTitle}
            onChange={handleEditChange}
            placeholder="Edit title"
          />
          <input
            type="text"
            name="editDescription"
            value={editDescription}
            onChange={handleEditChange}
            placeholder="Edit description"
          />
          <input
            type="text"
            name="editImgUrl"
            value={editImgUrl}
            onChange={handleEditChange}
            placeholder="Edit image URL"
          />
          <div className="button-container">
            <button type="button" onClick={handleRemoveImage}>Remove Image</button>
            <button type="submit">Update</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <h1>{username}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
          {imgUrl && <img src={imgUrl} style={{ height: "100px", width: "100px" }} alt={title} />}
          <div>
            <button onClick={() => handleUpvote(_id)}>Upvote</button>
            <p>{upvotes.length}</p>
            <button onClick={() => handleDownvote(_id)}>Downvote</button>
            <p>{downvotes.length}</p>
          </div>
          {isUser && (
            <div>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => deleteIssue(_id)}>Delete</button>
            </div>
          )}
        </>
      )}
      <CommentForm issueId={_id} updateComments={setComments} />
      <CommentList comments={comments} />
    </div>
  );
}
