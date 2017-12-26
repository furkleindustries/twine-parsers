import {
  cssParse,
} from './cssParse';
import {
  ICssParserOptions,
} from './ParserOptions/ICssParserOptions';
import {
  IParser,
} from './IParser';
import {
  Stylesheet,
} from 'css';

export class CssParser implements IParser {
  parse: (src: string, options: ICssParserOptions) => Stylesheet = cssParse;
}

export default CssParser;