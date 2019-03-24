import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { createHttpObservable } from '../util';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    beginnerCourses$: Observable<Course[]>;
    advancedCourses$: Observable<Course[]>;

    constructor() {
    }

    ngOnInit() {
        const http$ = createHttpObservable('/api/courses');
        const courses$: Observable<Course[]> = http$
            .pipe(
                tap(() => console.log('HTTP request executed')),
                map(res => Object.values(res['payload']) ),
                shareReplay(),
                retryWhen(errors => errors.pipe(delayWhen(() => timer(2000)))),
            );
        this.beginnerCourses$ = courses$.pipe(map(courses => courses.filter(course => course.category === 'BEGINNER')));
        this.advancedCourses$ = courses$.pipe(map(courses => courses.filter(course => course.category === 'ADVANCED')));
    }
}

        // const courses$: Observable<Course[]> = http$
        //     .pipe(
        //         // tap(() => console.log('HTTP request executed')),
        //         map(res => Object.values(res['payload']) ),
        //         // shareReplay(),
        //         // retryWhen(errors =>
        //         //     errors.pipe(
        //         //     delayWhen(() => timer(2000)
        //         //     )
        //         // ) )
        //     );
        // const http$ = createHttpObservable('/api/courses');
        // const courses$　= http$.pipe(map(res => Object.values(res['payload'])));


        // courses$.subscribe(
        //     courses => {
        //         this.beginnerCourses$ = courses.filter(course => course.category === 'BEGINNER');
        //         this.advancedCourses$ =  courses.filter(course => course.category === 'ADVANCED');
        //     },
        //     noop, // () => {},
        //     () => console.log(('completed'))
        // );
// const http$ = createHttpObservable('/api/courses');
// const courses$ = http$.pipe(map(res => Object.values(res['payload'])));

// courses$.subscribe(
//     courses => {
//         this.beginnerCourses$ = courses.filter(course => course.category === 'BEGINNER');
//         this.advancedCourses$ =  courses.filter(course => course.category === 'ADVANCED');
//     },
//     noop, // () => {},
//     () => console.log(('completed'))
// );