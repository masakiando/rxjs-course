import { Component, OnInit } from '@angular/core';
import { merge, interval, concat, timer, fromEvent, Observable, noop, of, forkJoin, Subject, BehaviorSubject, range, from} from 'rxjs';
import {distinct, filter, map, debounceTime, tap, flatMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import * as _ from 'lodash';

@Component({
    selector: 'app-infinite-scroll-list',
    template: `
    <table>
      <tbody>
        <tr *ngFor="let item of itemResults$|async" [style.height]="itemHeight + 'px'">
          <td>{{item.name}}</td>
        </tr>
      </tbody>
     </table>
    `
})
export class ScrollComponent implements OnInit {
    private cache = [];
    private pageByManual$ = new BehaviorSubject(1);
    private itemsHeight = 40;
    private numberOfItems = 10;
    private pageByScroll$ = fromEvent(window, 'scroll')
    .pipe(
     map( () => window.scrollY),
     tap(v => console.log(v)),
     filter(current => current >= document.body.clientHeight - window.innerHeight),
     debounceTime(200),
     map(y => Math.ceil((y + window.innerHeight) / (this.itemsHeight * this.numberOfItems)))
    ).subscribe(data => console.log(data));

    // console.log(document.body.clientHeigh);
    
    constructor() { }

    ngOnInit() {
    }

}
