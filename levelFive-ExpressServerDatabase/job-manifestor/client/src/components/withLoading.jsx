// Import necessary modules and packages
import React, { useState, useEffect } from 'react'; // Import React and hooks

// Higher-Order Component (HOC) to add loading state
const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
      const fetchData = async () => {
        try {
          await props.fetchData(); // Call the fetchData function passed as a prop
        } catch (error) {
          console.error('Error fetching data:', error); // Log any error
        } finally {
          setLoading(false); // Set loading to false after data is fetched
        }
      };

      fetchData(); // Call the fetchData function when the component mounts
    }, [props]);

    if (loading) {
      return <div>Loading...</div>; // Display loading message while data is being fetched
    }

    return <WrappedComponent {...props} />; // Render the wrapped component with the fetched data
  };
};

export default withLoading; 
