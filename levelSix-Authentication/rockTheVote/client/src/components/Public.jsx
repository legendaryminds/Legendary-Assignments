import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

// Public Component: Renders the public page with a list of all issues
function Public() {
    const { allIssues, getAllIssues } = useContext(UserContext);

    // Fetch all issues on component mount
    useEffect(() => {
        getAllIssues();
    }, []);

    return ( 
        <>
            <h1>Public Page</h1>
            {/* List of all issues */}
            <IssueList issues={allIssues} />
        </>
    );
}

export default Public;
