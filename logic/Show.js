const Database = require("../data/Database.js");

class Show {
    constructor(tconst, titleType, startYear, primaryTitle) {
        this.tconst = tconst;
        this.titleType = titleType;
        this.startYear = startYear;
        this.primaryTitle = primaryTitle;
    }

    getTconst() {
        return this.tconst || "N/A";
    }

    setTconst(tconst) {
        this.tconst = tconst;
    }

    getTitleType() {
        return this.titleType || "N/A";
    }

    setTitleType(titleType) {
        this.titleType = titleType;
    }

    getStartYear() {
        return this.startYear || 0;
    }

    setStartYear(startYear) {
        this.startYear = startYear;
    }

    getPrimaryTitle() {
        return this.primaryTitle || "N/A";
    }

    setPrimaryTitle(primaryTitle) {
        this.primaryTitle = primaryTitle;
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