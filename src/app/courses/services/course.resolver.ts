


import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {CoursesService} from './courses.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectCourseById } from '../course.selectors';
import { CourseRequested } from '../courses.actions';
import { tap, first, filter } from 'rxjs/operators';



@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(
      private coursesService: CoursesService,
      private store: Store<AppState>
    ) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

      const courseId = route.params['id'];

      return this.store.pipe(
        select(selectCourseById(courseId)),
        tap( course => {
          if (!course) {
            this.store.dispatch(new CourseRequested({courseId}));
          }
        }),
        filter( course => !!course),
        first()
      );

      // return this.coursesService.findCourseById(route.params['id']);
    }

}

