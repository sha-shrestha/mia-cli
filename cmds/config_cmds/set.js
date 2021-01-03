const inquirer = require("inquirer")


exports.command = 'set'
exports.desc = 'Set config'
exports.builder = {
    format: {
        default: 'json'
    },
    dryrun: {
        default: false
    }
}
exports.handler = function (argv) {
    inquirer.prompt([
        {
            name: "SID",
            type: "input",
            message: "Enter your SID:"
        }, {
            name: "user_password",
            type: "password",
            message: "Enter Password:"
        },
    ]).then((answer) => {
        console.log(answer.SID);
        console.log(answer.user_password);
    });
}
