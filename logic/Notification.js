const Database = require("../data/Database.js");

/* Database Columns: NOTIFICATION_ID, USERNAME, N_DATE, N_SUBJECT, N_MESSAGE, RECIPIENTS */

class Notification {
    constructor(id, userName, date, subject, message, recipients) {
        this.id = id;
        this.userName = userName;
        this.date = date;
        this.subject = subject;
        this.message = message;
        this.recipients = recipients;
    }

    static async fetchNotifications() {
        const shows = await Database.fetchNotifications();

        return shows.map(s => new Notification(
            s.NOTIFICATION_ID,
            s.USERNAME,
            s.N_DATE,
            s.N_SUBJECT,
            s.N_MESSAGE,
            s.RECIPIENTS
        ));
    }
}

module.exports = Notification;
