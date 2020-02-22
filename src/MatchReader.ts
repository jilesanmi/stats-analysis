import { dateStringToDate } from './utils'
import { MatchPossibility } from './matchResults'

type MatchData = [Date, string, string, number, number, MatchPossibility, string]

interface DataReader {
  read(): void;
  data: string[][];
}


export class MatchReader {

  matches: MatchData[] = [];

  constructor(public reader: DataReader){}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [ dateStringToDate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchPossibility, row[6]];
    })  
  }

  
}