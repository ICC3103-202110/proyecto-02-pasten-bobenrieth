const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const { printTable } = require('console-table-printer');
const prompt = require('prompt-sync')();


function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Weather app',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(listArrows){
    return printTable(listArrows)
}



function noCities(){
    return chalk.gray("NO CITIES")
}

function selectAction1(){
    return inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Select action:',
        choices: ['Add City']
    })
       
}

function selectAction2(){
    return inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Select action:',
        choices: ['Add City','Update City','Delete City']
    })
       
}

function InputLocation(){
    return inquirer.prompt({
        name: 'input',
        message: 'Location?'
    })
}



module.exports = {
    getTitle,
    getTable,
    noCities,
    selectAction1,
    selectAction2,
    InputLocation
    
}