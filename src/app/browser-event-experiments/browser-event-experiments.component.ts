import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.scss']
})
export class BrowserEventExperimentsComponent implements OnInit {
  hoverSection: HTMLElement;
  unSubscribeEle: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.style.width = '100px';
    this.hoverSection.style.height = '100px';
    this.hoverSection.style.background = '#000';
    this.hoverSection.style.color = '#fff';
    this.hoverSection.style.margin = '0 auto';
    this.hoverSection.addEventListener('mousemove', this.onMouseMove);
    this.hoverSection.addEventListener('click', this.onClick);
    this.unSubscribeEle = document.getElementById('mat-raised-button_wrapper');
    this.unSubscribeEle.style.textAlign = 'center';
  }

  private onMouseMove(ev: MouseEvent): any[] {
    console.log('onMouseMove', ev);
    return [ev.clientX, ev.clientY];
  }
  private onClick(ev: MouseEvent): any[] {
    console.log('onClick', ev);
    return [ev.clientX, ev.clientY];
  }

  private unSubscribe(): void {
    console.log('called unSubscribe');
    this.hoverSection.removeEventListener('mousemove', this.onMouseMove);
  }

}

// private onMouseMove(results: any[], passengers: number): any[] {
//   return results.filter(v => Number(v.passengers) < passengers);
// }
