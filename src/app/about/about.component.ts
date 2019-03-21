import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent, Observable, noop, } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHttpObservable } from '../util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
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