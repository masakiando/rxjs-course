import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { merge, interval, concat, timer, fromEvent, Observable, noop, of, forkJoin, Subject, BehaviorSubject, range, from} from 'rxjs';
import { map, mapTo, tap, take, first, switchMap, reduce, max, min, combineLatest, buffer, scan, single } from 'rxjs/operators';
import { createHttpObservable } from '../util';
import { initNgModule } from '@angular/core/src/view/ng_module';
import { debug, RxJsLoggingLevel, setRxJsLoggingLevel } from '../debug';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public deleteSubject = new Subject();
  source$: Observable<any>;
  @ViewChild('http') button: ElementRef;
  constructor() { }

  ngOnInit() {
    

  }
}
        // // first(1) success
        // of(1, 3, 7, 9, 10, 80, 100, 200)
        // .pipe(
        //   first(v => v % 2 === 0 && v > 30 && v <= 100),
        //   // debug( RxJsLoggingLevel.INFO, 'value'),
        // ).subscribe(
        //   v  => console.log(`${v}は31以上100以下です。` , // output 80
        //   error => console.log(error),
        // ));
        // // first(2) files
        // of(1, 3, 7, 9, 10, 80, 100, 200)
        // .pipe(
        //   first(v => v % 2 === 1 && v > 30 && v <= 100),
        //   ).subscribe(
        //   v => console.log(v),
        //   error => console.log(error), // output erro
    // forkJoin
    // const obs$ = forkJoin(
    //   timer(3000, 1000).pipe(take(3)),
    //   interval(500).pipe(take(4)),
    // );
    // obs$.subscribe(
    //   (event) => console.log(event),
    //   error => console.log(error),
    //   () => console.log('completed'),
    // );
    // const subject = new BehaviorSubject(0);
    // Subjectのバリエーションの1つはBehaviorSubjectです。
    // BehaviorSubjectには、「現在の」値を格納するという特性があります。
    // つまり、BehaviorSubjectから最後に発行された値をいつでも直接取得できます。
  //  const subject = new BehaviorSubject(0);
  //  const series$ = subject.asObservable();
  //  series$.subscribe(val => console.log('early sub:' + val));

  //  subject.next(1);
  //  subject.next(2);
  //  subject.next(3);
  //  subject.complete();

  // setTimeout(() => {
  //   series$.subscribe(val => console.log('late sub:' + val));
  //   subject.next(4);
  // }, 3000);

// Observableからobs作る
// e.g. wraps callback, event, ... => 'Passive(受動的)'
// 受動的 => 他から動作・作用を及ぼされるさま。自分の意志からでなく、他に動かされてするさま。
// const obs = Observable.create();
// Observableからsub作る next()を使う
// can be triggered fromm code(コードからトリガすることができます) => 'Active(能動的)'
// 能動的 => 自分から他へはたらきかけるさま。
// const sub = Subject.create(); // SubjectもObservableの仲間です！　next()

// setRxJsLoggingLevel(RxJsLoggingLevel.INFO);
// forkJoin (1)
// const getPostOne$ = timer(1000).pipe(mapTo({id: 1}));
// const getPostTwo$ = timer(2000).pipe(mapTo({id: 2}));

// forkJoin(getPostOne$, getPostTwo$).subscribe(res => console.log(res));

// forkJoin (2)
// const http1$ = createHttpObservable('https://swapi.co/api/people/1/');
// const http2$ = createHttpObservable('https://swapi.co/api/starships/9/');
// forkJoin(http1$, http2$)
// .pipe(
//     tap(([people, starships]) => {
//         console.log('course', people);
//         console.log('lessons', starships);
//     }),
//     debug( RxJsLoggingLevel.INFO, 'people, starships'),

// )
// .subscribe(res => console.log(res));

// AbortController test
// const http$ = createHttpObservable('/api/courses');
// const sub = http$.subscribe(res => console.log(res));
// setTimeout(() => sub.unsubscribe(), 0)
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

    // function test() {
    //   return [ {q: 'ss'}, {b: 'bb'} ];
    // }
    // const [ a, b ] = test();
    // console.log(a, b);
   // const numbers = range(1, 10);
    // numbers.subscribe(x => console.log(x));
  //   const stream$$ = concat(
  //     maxStream$, minStream$
  // );
  //   stream$$.subscribe( data => console.log(data));
// max(a, b) {
//   return a > b ? a : b;
// }

  // var max$ = source$.scan(max,0);
  // const  objectStream$ = of({ name : 'chris' }, { age : 11 })
  //   .pipe(
  //   reduce((acc, curr) => Object.assign({}, acc, curr ))
  // );
  // objectStream$.subscribe(v => console.log(v));
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
// const http$ = createHttpObservable('/api/courses');
// const sub = http$.subscribe(res => console.log(res));
// setTimeout(() => sub.unsubscribe(), 0)
// const interval$ = interval(1000)
  // const interval$ = timer(3000, 1000);
  // const sub = interval$.subscribe(val => console.log(val));
  // setTimeout(() => sub.unsubscribe(), 10000);
  // const click$ = fromEvent(document, 'click');
  // click$.subscribe(val => console.log(val));
  // const source = fromEvent(document, 'click');
  // const example = source.pipe(
  //   switchMap(val => interval(1000).pipe(mapTo('Hello, I made it!')))
  // );
  // const subscribe = example.subscribe(val => console.log(val));
      // const myInterval = Rx.Observable.interval(1000);
