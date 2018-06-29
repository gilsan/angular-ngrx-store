import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
      path: 'courses',
      loadChildren: './courses/courses.module#CoursesModule',
      canActivate: [AuthGuard],
  },
  {
      path: '**',
      redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
