import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList.jsx';
import IssueForm from './IssueForm';

// Profile Component: Renders user's profile with issue list and issue form
function Profile() {
    const { user, getUserIssues, issues } = useContext(UserContext);

    // Fetch user-specific issues on component mount
    useEffect(() => {
        getUserIssues();
    }, []);

    console.log(issues);

    return (
        <>
            <h1>Username: {user.username}</h1>
            {/* Form to add new issues */}
            <IssueForm />
            {/* List of user's issues */}
            <IssueList issues={issues} />
        </>
    );
}

export default Profile;
