const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nunjucks = require('nunjucks');

const Notification = require("../logic/Notification.js")

class WebUI {
    constructor() {
        this.app = express();

        this.app.use(cors())
        this.app.use(bodyParser.json())

        nunjucks.configure('views', {
            autoescape: true,
            express: this.app
        });

        this.app.get('/', (req, res) => {
            res.json('this is working')
        })

        this.app.get('/list_notifications', async (req, res) => {
            const notifications = await Notification.fetchNotifications();

            res.render("list_notifications.html", {
                notifications: notifications
            });
        })

        this.app.use(express.static('static'));
    }

    async run() {
        this.app.listen(3000, () => {
            console.log(`Server is running on port 3000`);
        });
    }
}

module.exports = WebUI;