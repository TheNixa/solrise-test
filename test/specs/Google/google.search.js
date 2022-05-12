const SearchPage = require('../../pageObjects/Google/search.page');
const ResultsPage = require('../../pageObjects/Google/results.page');

describe('My Google search', () => {
    it('should find that there is too much cheese on the internet', async () => {
        SearchPage.open();
    
        //Search for cheese
        await SearchPage.searchForCheese('Cheese');

        //Verify that there is too much cheese
        await expect(ResultsPage.resultText).toBeDisplayed();
        await expect(ResultsPage.resultText).toHaveTextContaining('About 777 results');
    });
});
