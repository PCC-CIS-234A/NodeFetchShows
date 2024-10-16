const Database = require("../data/Database.js");
const Show = require("../logic/Show.js")

class UI
{
    async run() {
        const title = "Westworld";
        let titles = await Show.fetchTitles(title);
        titles.forEach(title => console.log(title));
    }
}

module.exports = UI;