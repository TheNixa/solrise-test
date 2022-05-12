const Page = require('../Google/page');

class ResultsPage extends Page {

    // Define selectors using getter methods

    get resultText() {
        return $('//*[@id="result-stats"]');
    }
}


module.exports = new ResultsPage();