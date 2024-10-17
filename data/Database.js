const sql = require('mssql');

class Database {
    static connect() {
        if(!Database.pool) {
            Database.pool = sql.connect({
                server: 'cisdbss.pcc.edu',
                user: '234A_Event_Loop_Heroes',
                password: 'GoodDay1$',
                database: '234A_Event_Loop_Heroes',
                options: {
                    enableArithAbort: true,
                    trustServerCertificate: true
                }
            });
        }
    }

    /* Methods for Account Creation and Login */

    /* Methods for SendNotification */

    /* Create Template */

    /* Review Notification Log */

    static async fetchNotifications() {
        Database.connect();
        const query = `
            SELECT NOTIFICATION_ID, USERNAME, N_DATE, N_SUBJECT, N_MESSAGE, RECIPIENTS
            FROM NOTIFICATIONS;
        `;
        let conn = await Database.pool;
        let result = await conn.query(query);
        return result.recordset;
    }
}

module.exports = Database;