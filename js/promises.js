


fetch('https://api.github.com/users/{username}/events', {headers: {'Authorization': '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'}}).then(( response => {
    response.json().then(users => {
        users.forEach(user => {
        })

// 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

// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: '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'
// })
//
// await octokit.request('GET /users/{username}/events', {
//     username: 'cortiz642'
// })

        fetch('https://api.github.com/users/{username}/events').then(response => {
            response.json().then(users => {
                users.forEach(user => {

                    // do something with each user object...
                    console.log(user);
                });
            });
        });

        fetch('https://api.github.com/users').then(response => {
            response.json().then(users => {
                users.forEach(userObj => {
                    // do something with the username login
                    console.log(userObj.login);
                });
            });
        });
//
// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(users => {
//         users.forEach( userObj => {
//             // do something with each username
//             console.log(userObj.login);
//         })
//     })
//     .catch(error => console.error(error));
//
// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }

// later on...

        function getGithubUsernames() {
            return fetch('https://api.github.com/users')
                .then(response => response.json())
        }
    })
}))


// later on...

// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));
//
// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// // Octokit.js
// // https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: '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'
// })
//
// await octokit.request('GET /users/{username}/events', {
//     username: 'cortiz642'
// })