const Page = require('../Google/page');

class ResultsPage extends Page {

    // Define selectors using getter methods

    get resultText() {
        return $('.LHJvCe #result-stats');
    }
}


module.exports = new ResultsPage();