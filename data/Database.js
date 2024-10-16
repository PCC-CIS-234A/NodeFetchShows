const sql = require('mssql');

class Database {
    static connect() {
        if(!Database.pool) {
            Database.pool = sql.connect({
                server: 'cisdbss.pcc.edu',
                database: 'IMDB',
                user: '275student',
                password: '275student',
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

    static async fetchTitles(title) {
        Database.connect();
        const query = `
            SELECT TOP 50 tconst, titleType, startYear, primaryTitle
            FROM title_basics
            WHERE primaryTitle = @title;
        `;
        let conn = await Database.pool;
        let result = await conn.request()
            .input("title", sql.NVarChar('Max'), title)
            .query(query);
        return result.recordset;
    }
}

module.exports = Database;