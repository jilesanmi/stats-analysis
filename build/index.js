"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var matchResults_1 = require("./matchResults");
var readCsv = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(readCsv);
matchReader.load();
var manUwins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === matchResults_1.MatchPossibility.HomeWin) {
        manUwins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResults_1.MatchPossibility.AwayWin) {
        manUwins++;
    }
}
console.log("Man United has won " + manUwins + " times");