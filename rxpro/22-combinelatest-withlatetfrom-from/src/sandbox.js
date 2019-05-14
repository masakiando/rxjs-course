import { updateDisplay, displayLog } from "./utils";

import { fromEvent, combineLatest } from "rxjs";
import { map, debounceTime, withLatestFrom } from "rxjs/operators";

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
  const taizyuNumber$ = fromEvent(form.taizyu, "input").pipe(
    debounceTime(400),
    map(evt => evt.target.value)
  );
  const sintyouNumber$ = fromEvent(form.sintyou, "input").pipe(
    debounceTime(400),
    map(evt => evt.target.value)
  );
  const submitButton$ = fromEvent(form.btn, "click");

  // const formData$ = combineLatest(formName$, formEmail$, formNumber$);

  const formData$ = submitButton$.pipe(
    withLatestFrom(taizyuNumber$, sintyouNumber$),
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
