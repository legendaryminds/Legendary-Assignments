import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

function Public() {
    const { allIssues, getAllIssues } = useContext(UserContext);

    useEffect(() => {
        getAllIssues();
    }, []);

    return ( 
        <>
            <h1>Public Page</h1>
            <IssueList issues={allIssues} />
        </>
     );
}

export default Public;