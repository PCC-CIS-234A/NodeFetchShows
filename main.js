const WebUI = require("./ui/WebUI.js");

async function main() {
    const ui = new WebUI();
    await ui.run();
}

main();
