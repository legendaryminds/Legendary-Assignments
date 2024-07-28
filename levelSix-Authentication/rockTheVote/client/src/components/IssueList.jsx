import React from "react";
import Issue from "./Issue";

// IssueList Component: Renders a list of issues
export default function IssueList({ issues }) {
  // Map through issues array to create an array of Issue components
  const issueElements = issues.map(issue => (
    <Issue {...issue} key={issue._id} />
  ));

  // Render the list of issues or a message if there are no issues
  return (
    <div>
      {issues.length > 0 ? issueElements : <p>No issues to display.</p>}
    </div>
  );
}
