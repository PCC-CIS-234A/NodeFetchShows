const Database = require("../data/Database.js");

class Show {
    constructor(tconst, titleType, startYear, primaryTitle) {
        this.tconst = tconst;
        this.titleType = titleType;
        this.startYear = startYear;
        this.primaryTitle = primaryTitle;
    }

    getTconst() {
        return this.tconst;
    }

    setTconst(tconst) {
        this.tconst = tconst;
    }

    static async fetchTitles(title) {
        const shows = await Database.fetchTitles(title);

        return shows.map(s => new Show(
            s.tconst,
            s.titleType.trim(), // remove padding
            s.startYear, // integer
            s.primaryTitle
        ));
    }
}

module.exports = Show;