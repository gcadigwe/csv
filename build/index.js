"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchreader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchreader.load();
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
var summary = Summary_1.Summary.winsAnalysisWithHtml('Man United');
summary.buildAndPringReport(matchreader.matches);
