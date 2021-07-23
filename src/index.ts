import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './ReportTarget/ConsoleReport';
import { WinsAnalysis } from './Analyzers/WinsAnalyzer';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');

const matchreader = new MatchReader(csvFileReader);
matchreader.load();

// let manUnitedWins = 0;

// for (let match of matchreader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPringReport(matchreader.matches);
