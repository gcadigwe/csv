"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./ReportTarget/ConsoleReport");
var WinsAnalyzer_1 = require("./Analyzers/WinsAnalyzer");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchreader = new MatchReader_1.MatchReader(csvFileReader);
matchreader.load();
// let manUnitedWins = 0;
// for (let match of matchreader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
var summary = new Summary_1.Summary(new WinsAnalyzer_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPringReport(matchreader.matches);
