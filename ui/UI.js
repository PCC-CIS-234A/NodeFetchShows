const Database = require("../data/Database.js");
const Show = require("../logic/Show.js")
const readline = require('readline-sync');

class UI
{
    async run() {
        while(true) {
            let title = await readline.question("Please enter the title of a show or 'exit' to quit: ")
            if(title == "exit")
                break;
            let titles = await Show.fetchTitles(title);
            if(titles.length == 0) {
                console.log("\nSearch returned no results.\n");
            } else {
                console.log(`\nSearch results for ${title}:\n`)
                console.log(`${"ID".padEnd(15)} ${"Title".padEnd(50)} ${"Year".padEnd(6)} Type`)
                titles.forEach(title => {
                    console.log(`${title.getTconst().padEnd(15)} ${title.getPrimaryTitle().padEnd(50)} ${title.getStartYear().toString().padEnd(6)} ${title.getTitleType()}`)
                });
                console.log()
            }
        }
    }
}

module.exports = UI;