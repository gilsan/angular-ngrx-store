import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.reducer';
import * as fromCourse from './courses.reducer';
import { Effect } from '@ngrx/effects';
import * as lessonsReducer from './lessons.reducer';
import { PageQuery } from './courses.actions';

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');
export const selectLessonsState = createFeatureSelector<lessonsReducer.LessonsState>('lessons');

export const selectCourseById = (courseId: number) => createSelector(
  selectCoursesState,
  coursesState =>  coursesState.entities[courseId]
);

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourse.selectAll
 // coursesState => coursesState.ids

);

export const allCoursedLoaded = createSelector(
  selectCoursesState,
  coursesState => coursesState.allCoursesLoaded
);

export const selectAllLessons = createSelector(
  selectLessonsState,
  lessonsReducer.selectAll
);

export const selectLessonsPage = (courseId: number, page: PageQuery) => createSelector(
  selectAllLessons,
 allLessons => {
   const start = page.pageIndex * page.pageSize,
          end  = start + page.pageSize;
         return allLessons.filter(lesson => lesson.courseId === courseId)
                   .slice(start, end);
 }
);

export const selectLessonsLoading = createSelector(
  selectLessonsState,
  lessonsState => lessonsState.loading
);



