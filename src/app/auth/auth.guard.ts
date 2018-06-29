import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import { isLoggedIn } from './auth.selectors';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AuthState>,
    private router: Router
  ) {}

  canActivate() {

  return  this.store.pipe(
      select(isLoggedIn),
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigateByUrl('/ngrxstore/login');
        }
      })
    );
  }

}
