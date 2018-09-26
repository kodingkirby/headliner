
var synonyms = require("synonyms");
var thesaurus = require('thesaurus-synonyms');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

async function postIndex(req, res) {
	var wordsList;
	var wordsListResultV;
	var wordsListResultN;
	var corticalResult;
	var thesaurusResult = "coming soon";

	wordsList = req.body.words;
	console.log(wordsList);

	wordsListResultV = synonyms(wordsList, "v");
	wordsListResultN = synonyms(wordsList, "n");

	corticalResult = await thesaurus.similar(wordsList);
	//thesaurusResult = await thesaurus.search('test');
	res.render('results', {
		title: 'Results', 
		prevValue: wordsList,
		wordsListResultV: wordsListResultV,
		wordsListResultN: wordsListResultN,
		corticalResult: corticalResult,
		thesaurusResult: thesaurusResult
	});
	
};
async function postResults(req, res) {

	
};

module.exports.postIndex = postIndex; 
module.exports.postResults = postResults;