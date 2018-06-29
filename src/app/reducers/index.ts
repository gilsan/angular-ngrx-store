import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {User} from '../model/user.model';
import {AuthActions, AuthActionTypes} from '../auth/auth.actions';
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer} from '@ngrx/router-store';

//  interface AuthState {
//    loggedIn: Boolean;
//    user: User;
//  }

//  const initialAuthState: AuthState = {
//      loggedIn: false,
//      user: undefined
//  };
//

//
//  function authReducer(state: AuthState = initialAuthState, action): AuthState {
//    switch (action.type) {
//      case AuthActionTypes.LoginAction:
//       return {
//         loggedIn: true,
//         user: action.payload.user
//       };
//
//       default:
//       return state;
//    }
//
//  }

  export interface AppState {
   // auth: AuthState;
  }
export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};






export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [storeFreeze] : [];
