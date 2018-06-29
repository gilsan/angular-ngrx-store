import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Logout } from '../../auth/auth.actions';
import { map } from 'rxjs/operators';
import { AuthState } from '../../auth/auth.reducer';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from '../../auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

   isLoggedIn$: Observable<boolean>;
   isLoggedOut$: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<AuthState>,
  ) { }

  ngOnInit() {
    this.isLoggedIn$ =  this.store.
     pipe(
       select(isLoggedIn)
     //  map( state =>  state.auth.loggedIn )
     );

    this.isLoggedOut$ = this.store.
    pipe(
      select(isLoggedOut)
    //  map( state => !state.auth.loggedIn)
    );
  }

  onSideNavToggle() {
    this.sidenavToggle.emit();
  }

  login() {
  //  this.router.navigateByUrl('/ngrxstore/login');

  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
