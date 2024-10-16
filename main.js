const Database = require("./data/Database.js");
const UI = require("./ui/UI.js");

async function main() {
    const ui = new UI();
    await ui.run();
    process.exit();
}

main()