import { displayLog } from "./utils";
import { Observable } from "rxjs";

export default () => {
  /** start coding */
  const observable = my5Interval(1000);
  observable.subscribe(x=>console.log(x));
  const my5Interval = (ms) => Observable.create(observer=> {
    let count = 0;
    const id = setInterval(()=>{
      observer.next(count);
      count++;
    }, ms);
  });

  // subscribe to display scroll progress percentage
  const subscription2 = observable.subscribe(val =>
    displayLog(`${val}`)
  );

  /** end coding */
};

