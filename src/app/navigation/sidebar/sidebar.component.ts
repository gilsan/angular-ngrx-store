import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../../auth/auth.reducer';
import { Logout } from '../../auth/auth.actions';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from '../../auth/auth.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() closeSideNab = new EventEmitter <void>();

  isLoggedIn$:  Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(
    private router: Router,
    private store: Store<AuthState>,
  ) { }

  ngOnInit() {
   this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );

    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );

  }

  onClose() {
    this.closeSideNab.emit();
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }

}
