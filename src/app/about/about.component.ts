import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { merge, interval, concat, timer, fromEvent, Observable, noop, of, forkJoin} from 'rxjs';
import { map, mapTo, tap } from 'rxjs/operators';
import { createHttpObservable } from '../util';
import { initNgModule } from '@angular/core/src/view/ng_module';
import { debug, RxJsLoggingLevel, setRxJsLoggingLevel } from '../debug';
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setRxJsLoggingLevel(RxJsLoggingLevel.INFO);
    // forkJoin (1)
    // const getPostOne$ = timer(1000).pipe(mapTo({id: 1}));
    // const getPostTwo$ = timer(2000).pipe(mapTo({id: 2}));

    // forkJoin(getPostOne$, getPostTwo$).subscribe(res => console.log(res));

    // forkJoin (2)
    const http1$ = createHttpObservable('https://swapi.co/api/people/1/');
    const http2$ = createHttpObservable('https://swapi.co/api/starships/9/');
    forkJoin(http1$, http2$)
    .pipe(
        tap(([people, starships]) => {
            console.log('course', people);
            console.log('lessons', starships);
        }),
        debug( RxJsLoggingLevel.INFO, 'people, starships'),

    )
    .subscribe(res => console.log(res));

    // AbortController test
    // const http$ = createHttpObservable('/api/courses');
    // const sub = http$.subscribe(res => console.log(res));
    // setTimeout(() => sub.unsubscribe(), 0);
  }
}

// const interval$ = interval(1000);
// const subscription = interval$.subscribe(console.log);
// setTimeout(() => subscription.unsubscribe(), 5000);
// merge
// const interva1l$ = interval(1000);
// const interval2$ = interva1l$.pipe(map(val => 10 * val));
// const result$ = merge(interva1l$, interval2$);
// result$.subscribe(console.log);
// concat
// const source1$ = interval(1000);
// const source2$ = of(4, 5, 6);
// const source3$ = of(7, 8, 9);
// const result$ = concat(source1$, source2$, source3$);
// result$.subscribe(console.log);

// const http$ = createHttpObservable('/api/courses');
// const courses$ = http$.pipe(map(res => Object.values(res['payload'])));
// courses$.subscribe(
//   courses => console.log(courses),
//   noop, // () => {},
//   () => console.log(('completed'))
// );

    // const http$ = Observable.create(observer => {
    //   fetch('/api/courses')
    //     .then(res => {
    //       return res.json();
    //     })
    //     .then(body => {
    //       observer.next(body);
    //       observer.complete();
    //     })
    //     .catch(err => {
    //       observer.error(err);
    //     });
    // });
    // http$.subscribe(
    //   courses => console.log(courses),
    //   noop, // () => {},
    //   () => console.log(('completed'))
    // );


    // rxライブらり機能使うと
    // 1.コードと行が短い,読みやすい、=> 開発 スピード UP
    // 2. 純粋関数
    // 3. オペーレータの組み合わせで難しいことが簡単にできる
    // 結果：楽, 保守しやすい、バグない、テスト簡単, エラーハンドリング
    // const timer$ = timer(3000, 1000);
    // const subscription = timer$.subscribe(v => console.log('stream 1 =>' + v));
    // setTimeout(() => subscription.unsubscribe(), 5000);

    // const click$ = fromEvent(document, 'click');
    // click$.subscribe(
    //   event => console.log(event),
    //   error => console.log(error),
    //   () => console.log('completed'),
    // );
    // const interval$ = interval(1000);
    // interval$.subscribe(v => console.log('stream 1 =>' + v));
    // interval$.subscribe(v => console.log('stream 2 =>' + v));

    // document.addEventListener('click', evt => {
    //   console.log(evt);
    //   setTimeout(() => {
    //     console.log('finished...');
    //     let counter = 0;
    //     setInterval(() => {
    //       console.log(counter);
    //       counter++;
    //     }, 1000);
    //   }, 3000);
    // });

    // let counter = 0;

    // setInterval(() => {
    //   console.log(counter);
    //   counter++;
    // }, 1000);

    // setTimeout(() => {
    //   console.log('finished...');
    // }, 3000);

    function test() {
      return [ {q: 'ss'}, {b: 'bb'} ];
    }
    const [ a, b ] = test();
    console.log(a, b);

