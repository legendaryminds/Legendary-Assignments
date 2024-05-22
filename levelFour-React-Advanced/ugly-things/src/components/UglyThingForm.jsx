import React, { useState, useContext } from 'react'; // Import necessary React functions
import { UglyThingsContext } from '../UglyThingsContext.jsx'; // Import the UglyThingsContext

const UglyThingForm = () => {
    const context = useContext(UglyThingsContext); // Use the context to get access to its values
    if (!context) return <div>Loading...</div>; // Ensure context is loaded; show loading message if not

    const { addUglyThing } = context; // Destructure addUglyThing function from context
    const [newThing, setNewThing] = useState({
        imgUrl: '', // Initialize imgUrl state
        title: '', // Initialize title state
        description: '' // Initialize description state
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target; // Extract name and value from the input field
        // Update the corresponding state field dynamically
        setNewThing(prevThing => ({ ...prevThing, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        addUglyThing(newThing); // Call addUglyThing to submit the new ugly thing using context function
        // Reset the form fields after submission
        setNewThing({ imgUrl: '', title: '', description: '' });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="imgUrl"
                    value={newThing.imgUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                    required // Field is required
                />
                <input
                    type="text"
                    name="title"
                    value={newThing.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required // Field is required
                />
                <input
                    type="text"
                    name="description"
                    value={newThing.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required // Field is required
                />
                <button type="submit">Submit</button> {/* Submit button */}
            </form>
        </div>
    );
};

export default UglyThingForm;
