import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

export enum  RxJsLoggingLevel {
  TRACE,
  DEBUG, // デバッグとは. デバッグ(debug)とは、プログラムをテストしてバグと呼ばれる誤りを発見し、取り除くことです。
  INFO,
  ERROR,
}

let rxjsLoggingLevel = RxJsLoggingLevel.INFO;

export function setRxJsLoggingLevel(level: RxJsLoggingLevel) {
    rxjsLoggingLevel = level;
}

export const debug = (level: number, message: string) => (source: Observable<any>) =>
   source
    .pipe(
        tap(val => {
　　　　　　　if (level >= rxjsLoggingLevel) {
              console.log(`${message}: `, val);
            }
        })
    );

