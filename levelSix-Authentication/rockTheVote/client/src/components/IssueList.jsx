import React from "react";
import Issue from "./Issue";

export default function IssueList({ issues }) {
    const issueElements = issues.map(issue => (
        <Issue {...issue} key={issue._id} />
    ));

    return (
    <div>
        {issues.length > 0 ? issueElements : <p>No issues to display.</p>}
    </div>
);

}
