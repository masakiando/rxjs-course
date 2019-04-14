import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Course3 } from '../model/ICourse3';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxAndFirebaseService {

  constructor(private db: AngularFireDatabase) {
  }

  findAllCourses() {
  }
}
