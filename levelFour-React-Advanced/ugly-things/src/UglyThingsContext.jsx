import React, { createContext, useState, useEffect } from 'react'; // Import necessary React functions
import axios from 'axios'; // Import axios for API requests

// Create the context
export const UglyThingsContext = createContext(); 

// Create a provider component
export const UglyThingsProvider = ({ children }) => {
    const [uglyThings, setUglyThings] = useState([]); // Initialize state to hold the list of ugly things
    const [loading, setLoading] = useState(true); // Initialize state to track loading status
    const [error, setError] = useState(null); // Initialize state to track errors

    // Fetch the initial list of ugly things from the API
    useEffect(() => {
        axios.get('https://api.vschool.io/cynthiacarter/thing') // Make a GET request to the API
            .then(res => {
                if (Array.isArray(res.data)) { // Check if the response data is an array
                    setUglyThings(res.data); // Set the state with the data received from the API
                } else {
                    console.error('Unexpected response data:', res.data); // Log unexpected data
                    setError(new Error('Unexpected response format')); // Set error state
                }
                setLoading(false); // Set loading to false
            })
            .catch(err => {
                console.error(err); // Log any errors
                setError(err); // Set the error state
                setLoading(false); // Set loading to false
            });
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Add a new ugly thing
    const addUglyThing = (newThing) => {
        axios.post('https://api.vschool.io/cynthiacarter/thing', newThing) // Make a POST request to the API with the new ugly thing data
            .then(res => setUglyThings(prevThings => [...prevThings, res.data])) // Add the new ugly thing to the state
            .catch(err => console.error(err)); // Log any errors
    };

    // Delete an ugly thing
    const deleteUglyThing = (id) => {
        axios.delete(`https://api.vschool.io/cynthiacarter/thing/${id}`) // Make a DELETE request to the API with the ugly thing's ID
            .then(() => setUglyThings(prevThings => prevThings.filter(thing => thing._id !== id))) // Remove the deleted ugly thing from the state
            .catch(err => console.error(err)); // Log any errors
    };

    // Edit an ugly thing
    const editUglyThing = (id, updatedThing) => {
        axios.put(`https://api.vschool.io/cynthiacarter/thing/${id}`, updatedThing) // Make a PUT request to the API with the updated ugly thing data
            .then(res => setUglyThings(prevThings => prevThings.map(thing => thing._id === id ? res.data : thing))) // Update the state with the edited ugly thing
            .catch(err => console.error(err)); // Log any errors
    };

    console.log('Providing Context with:', { uglyThings, loading, error }); // Log context values for debugging

    if (loading) return <div>Loading...</div>; // Render loading state
    if (error) return <div>Error: {error.message}</div>; // Render error state

    return (
        <UglyThingsContext.Provider value={{ uglyThings, addUglyThing, deleteUglyThing, editUglyThing }}> 
            {children} {/* Render children components */}
        </UglyThingsContext.Provider>
    );
};
