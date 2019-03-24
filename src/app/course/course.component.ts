import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../model/course";
import { createHttpObservable } from '../util';
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
    concatAll, shareReplay
} from 'rxjs/operators';
import {merge, fromEvent, Observable, concat, fromEventPattern} from 'rxjs';
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
        this.course$ = createHttpObservable(`/api/courses/${this.courseId}`);
    }

    ngAfterViewInit() {
      const searchLesson$ = fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
          map(event => event.target.value),
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(search => this.loadLessons(search))
          // concatMap(search => this.loadLessons(search))
       );

       const initialLessons$ = this.loadLessons();
       this.lessons$ = concat(initialLessons$, searchLesson$);
    }

    loadLessons(search = ''): Observable<Lesson[]> {
      return createHttpObservable(`/api/lessons?courseId=${this.courseId}&pageSize=100&filter=${search}`).
      pipe(map(res => res['payload']));
    }
}


// let input = document.querySelector('input');
// let observable = Rx.Observable.fromEvent(input, 'input');

// observable
// .debounceTime(500)
// .subscribe({
//   next: function(event) {
//     console.log(event.target.value);
//   }
// });
