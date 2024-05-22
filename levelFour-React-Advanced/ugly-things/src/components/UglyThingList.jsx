import React, { useContext, useState } from 'react'; // Import necessary React functions
import { UglyThingsContext } from '../UglyThingsContext.jsx'; // Import the UglyThingsContext

const UglyThingList = () => {
    const context = useContext(UglyThingsContext); // Use the context to get access to its values
    if (!context) return <div>Loading...</div>; // Ensure context is loaded; show loading message if not

    // Destructure necessary values from context
    const { uglyThings, deleteUglyThing, editUglyThing } = context;
    const [editingId, setEditingId] = useState(null); // State to track which ugly thing is being edited
    const [editedThing, setEditedThing] = useState({
        imgUrl: '', // Initialize imgUrl state for editing
        title: '', // Initialize title state for editing
        description: '' // Initialize description state for editing
    });

    // Start editing a specific ugly thing
    const startEditing = (thing) => {
        setEditingId(thing._id); // Set the ID of the ugly thing being edited
        // Pre-fill the form fields with the selected ugly thing's data
        setEditedThing({ imgUrl: thing.imgUrl, title: thing.title, description: thing.description });
    };

    // Handle input changes for the edit form
    const handleEditChange = (e) => {
        const { name, value } = e.target; // Extract name and value from the input field
        // Update the corresponding state field for editing
        setEditedThing(prevThing => ({ ...prevThing, [name]: value }));
    };

    // Handle form submission for editing
    const handleEditSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        editUglyThing(editingId, editedThing); // Call editUglyThing to save the edited ugly thing using context function
        setEditingId(null); // Reset the editing ID
        setEditedThing({ imgUrl: '', title: '', description: '' }); // Reset the form fields
    };

    return (
        <div>
            {uglyThings.map(thing => (
                <div key={thing._id} className="ugly-thing"> {/* Each ugly thing gets a unique key */}
                    {editingId === thing._id ? ( // Check if the current ugly thing is being edited
                        <form onSubmit={handleEditSubmit}>
                            <input
                                type="text"
                                name="imgUrl"
                                value={editedThing.imgUrl}
                                onChange={handleEditChange}
                                required // Field is required
                            />
                            <input
                                type="text"
                                name="title"
                                value={editedThing.title}
                                onChange={handleEditChange}
                                required // Field is required
                            />
                            <input
                                type="text"
                                name="description"
                                value={editedThing.description}
                                onChange={handleEditChange}
                                required // Field is required
                            />
                            <button type="submit">Save</button> {/* Save button for editing */}
                        </form>
                    ) : (
                        <>
                            <img src={thing.imgUrl} alt={thing.title} /> {/* Display image */}
                            <h3>{thing.title}</h3> {/* Display title */}
                            <p>{thing.description}</p> {/* Display description */}
                            <button onClick={() => deleteUglyThing(thing._id)}>Delete</button> {/* Delete button */}
                            <button onClick={() => startEditing(thing)}>Edit</button> {/* Edit button */}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UglyThingList;
