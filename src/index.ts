import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './ReportTarget/ConsoleReport';
import { WinsAnalysis } from './Analyzers/WinsAnalyzer';
import { Summary } from './Summary';
import { HtmlReport } from './ReportTarget/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');

const matchreader = new MatchReader(csvFileReader);
matchreader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPringReport(matchreader.matches);
