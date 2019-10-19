
// Load the NPM Package inquirer
const inquirer = require('inquirer');

// Reference source code files
// let movieSearch = require("./call_omdb.js");
// let bandSearch = require("./call_bandsintown.js");
// let songSearch = require("./call_spotify.js");
// let random = require("./call_random.js");

// Create a "Prompt" with a series of questions.
function initialQuestion() {
inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'actionType',
            choices: ['1. Post an item', '2. Bid on an item'],
        }
        // ,
        // // Here we create a basic text prompt.
        // {
        //     type: 'input',
        //     message: 'Input your search / request',
        //     name: 'input',
        // }
    ])
    .then(function (inquirerResponse) {
        switch (inquirerResponse.actionType) {
            case '1. Post an item':
                console.log("Go ahead and post!")
                break;
            case '2. Bid on an item':
                    console.log("What would you like to bid on?")
                // songSearch.spotify(inquirerResponse.input);
                break;
        }
    });
}

initialQuestion();