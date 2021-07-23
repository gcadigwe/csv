import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchreader = MatchReader.fromCsv('football.csv');
matchreader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

const summary = Summary.winsAnalysisWithHtml('Man United');

summary.buildAndPringReport(matchreader.matches);
