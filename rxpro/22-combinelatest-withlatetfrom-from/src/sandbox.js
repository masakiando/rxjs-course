import { updateDisplay, displayLog } from "./utils";

import { fromEvent, combineLatest } from "rxjs";
import { map, debounceTime, withLatestFrom, mapTo, tap} from "rxjs/operators";

import * as R from "ramda";
import * as _ from "lodash";

export default () => {
  /** start coding */

  /** get the form element */
  const form = document.getElementById("form");

  /** get observables from each form element */
  const formName$ = fromEvent(form.name, "input").pipe(
    debounceTime(400),
    map(evt => evt.target.value)
  );
  const formEmail$ = fromEvent(form.email, "input").pipe(
    debounceTime(400),
    map(evt => evt.target.value)
  );
  const formNumber$ = fromEvent(form.phone, "input").pipe(
    debounceTime(400),
    map(evt => evt.target.value)
  ); 
  const formWidth$ = fromEvent(form.width, "input").pipe(
    map(e => [{name: e.target.name, value: e.target.value}])
  )
  formWidth$.subscribe(x => console.log(x));

  const formHeight$ = fromEvent(form.height, "input").pipe(
    map(evt => evt.target.value)
  ); 
  



  const submitButton$ = fromEvent(form.btn, "click");

  // const formData$ = combineLatest(formName$, formEmail$, formNumber$);

  const formData$ = submitButton$.pipe(
    withLatestFrom(formName$, formEmail$, formNumber$),
    map(data => {
      console.log("data: ", data);
      const [click, ...formData] = data;

      return formData;
    })
  );

  const subscription1 = formData$.subscribe(data =>
    //
    displayLog(data)
  );

  // const subscription2 = scrollProgress$.subscribe(val =>
  //     updateDisplay(`${Math.floor(val)} %`)
  //   );
  /** end coding */
};
