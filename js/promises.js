// Create a function that accepts a GitHub username, and returns
// a promise that resolves returning just the
// date of the last commit that user made. Reference the
// gitHub api documentation to achieve this.


(async function() {

    const options = {
        method: "GET",
        headers: {
            'Authorization': "myToken"
        }
    }

    function githubUsername(username) {
        return fetch(`https://api.github.com/users/${username}/events`, options)
            .then((response) => response.json());

        // later on..
    }
    const lastCommit = await githubUsername("Denzel-Britton")
    console.log(lastCommit[0].created_at)


})();


