// Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
const username = "legendaryminds";

const url = `https://api.github.com/users/${username}/repos`;

// Function to make a GET request using XMLHttpRequest
function getRepos() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const repos = JSON.parse(xhr.responseText);

      // Calculate the total number of watchers using reduce
      const totalWatchers = repos.reduce(function (acc, repo) {
        return acc + repo.watchers_count;
      }, 0);

      console.log(`Total watchers across all repositories: ${totalWatchers}`);
    } else {
      console.error(`Error fetching data: ${xhr.status}`);
    }
  };

  xhr.send();
}

// Call the function to get repositories and calculate watchers
getRepos();
