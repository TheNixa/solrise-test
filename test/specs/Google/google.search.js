const SearchPage = require('../../pageObjects/Google/search.page');
const ResultsPage = require('../../pageObjects/Google/results.page');

describe('My Google search', () => {
    it('should validate number of search results', async () => {
        SearchPage.open("https://google.com");

        //Search for cheese
        await SearchPage.enterInputValue('Cheese');

        //Verify that there is too much cheese
        await expect(ResultsPage.resultText).toBeDisplayed();
        //TODO: check
        await expect(ResultsPage.resultText).toHaveTextContaining("About 777 results", {
            message: "There is too much cheese on the internet"
        })
    });
});
