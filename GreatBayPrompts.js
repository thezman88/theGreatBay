
// Load the NPM Package inquirer
const inquirer = require('inquirer');

// Reference source code files
// let movieSearch = require("./call_omdb.js");

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
    ])
    .then(function (inquirerResponse) {
        switch (inquirerResponse.actionType) {
            case '1. Post an item':
                console.log("Go ahead and post!")
                itemToPost();
                break;
            case '2. Bid on an item':
                    console.log("What would you like to bid on?")
                // songSearch.spotify(inquirerResponse.input);
                break;
        }
    });
}

function itemToPost() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What item would you like to post?',
                name: 'itemToPost',
            }
        ])
        .then(function (inquirerResponse) {
                    console.log(`${itemToPost} has been posted!`)
            }
        );
}

function itemToBidOn() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What item would you like to bid?',
                name: 'itemToBidOn',
            }
        ])
        .then(function (inquirerResponse) {
                    console.log(`How much would you like to bid for ${itemToBidOn}?`)
            }
        );
}


initialQuestion();