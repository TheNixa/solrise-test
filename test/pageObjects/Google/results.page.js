const Page = require('../Page');

class ResultsPage extends Page {

    // Define selectors using getter methods

    get resultText() {
        return $('.LHJvCe #result-stats');
    }
}


module.exports = new ResultsPage();