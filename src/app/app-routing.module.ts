import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CourseComponent} from "./course/course.component";
import {SnakesGameComponent} from "./snakes-game/snakes-game.component";
import { ScrollComponent } from './scroll/scroll.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "snakesgame",
        component: SnakesGameComponent
    },
    {
        path: "browser-event-experiments",
        component: BrowserEventExperimentsComponent
    },
    {
        path: "event-bus-experiments",
        component: EventBusExperimentsComponent
    },
    {
        path: "scroll",
        component: ScrollComponent
    },
    {
        path: 'courses/:id',
        component: CourseComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
