import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function Comment(props) {
    const { text, username, _id } = props;
    const { user, deleteComment, updateComment } = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    let isUser = props.userId === user._id;

    function handleEditChange(e) {
        setEditText(e.target.value);
    }

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
                    />
                    <button type="submit">Update</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
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
