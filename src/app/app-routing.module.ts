import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { RxAndfirebaseComponent } from './rx-andfirebase/rx-andfirebase.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'browser-event-experiments',
    component: BrowserEventExperimentsComponent,
  },
  {
    path: 'event-bus-experiments',
    component: EventBusExperimentsComponent,
  },
  {
    path: 'rx-and-firebase',
    component: RxAndfirebaseComponent ,
  },
  {
    path: 'courses/:id',
    component: CourseComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
