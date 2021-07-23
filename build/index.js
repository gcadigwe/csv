"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var WinsAnalyzer_1 = require("./Analyzers/WinsAnalyzer");
var Summary_1 = require("./Summary");
var HtmlReport_1 = require("./ReportTarget/HtmlReport");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchreader = new MatchReader_1.MatchReader(csvFileReader);
matchreader.load();
var summary = new Summary_1.Summary(new WinsAnalyzer_1.WinsAnalysis('Man United'), new HtmlReport_1.HtmlReport());
summary.buildAndPringReport(matchreader.matches);
