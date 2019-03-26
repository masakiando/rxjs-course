import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../model/course";
import { createHttpObservable } from '../util';
import { debug, RxJsLoggingLevel, setRxJsLoggingLevel } from '../debug';
import {
    debounceTime,
    distinctUntilChanged,
    startWith,
    tap,
    delay,
    map,
    concatMap,
    switchMap,
    withLatestFrom,
    concatAll, shareReplay,
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat, fromEventPattern } from 'rxjs';
import {Lesson} from '../model/lesson';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {
    courseId: string;
    course$: Observable<Course>;
    lessons$: Observable<Lesson[]>;


    @ViewChild('searchInput') input: ElementRef;

    constructor(private route: ActivatedRoute) {


    }

    ngOnInit() {
        this.courseId = this.route.snapshot.params['id'];
        this.course$ = createHttpObservable(`/api/courses/${this.courseId}`)
        .pipe(
            debug( RxJsLoggingLevel.INFO, 'course value'),
        );

        setRxJsLoggingLevel(RxJsLoggingLevel.TRACE);
    }

    ngAfterViewInit() {
      const initialLessons$ = this.loadLessons();
      this.lessons$ = fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
          map(event => event.target.value),
          startWith(''),
          debug( RxJsLoggingLevel.TRACE, 'search'),
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(search => this.loadLessons(search)),
          debug( RxJsLoggingLevel.DEBUG, 'lessons value'),
       );
    }

    loadLessons(search = ''): Observable<Lesson[]> {
      return createHttpObservable(`/api/lessons?courseId=${this.courseId}&pageSize=100&filter=${search}`).
      pipe(map(res => res['payload']));
    }
}

const config = [
    {
      groupA: {
          sen1: {
              id: 0,
              name: '',
              label: 'xxx',
              iconSrc: 'xxx',
              title: '',
              suUser: false,
          },
          sen2: {
              id: 0,
              name: '',
              label: 'xxx',
              iconSrc: 'xxx',
              title: '',
              suUser: false,
          }
      },
      groupB: {
          
      },
      groupC: {},
      groupD: {},
      groupE: {},
    }
];


// let input = document.querySelector('input');
// let observable = Rx.Observable.fromEvent(input, 'input');

// observable
// .debounceTime(500)
// .subscribe({
//   next: function(event) {
//     console.log(event.target.value);
//   }
// });
