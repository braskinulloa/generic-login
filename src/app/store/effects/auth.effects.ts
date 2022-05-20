import { AuthService } from './../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { loginUser, loginUserSuccess } from '../actions';
import { throwError } from '../actions';
 
@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      exhaustMap(action =>
        this.authService.login(action.usernameOrEmail, action.password).pipe(
          map( ({user, token}) => loginUserSuccess({ user, token })),
          catchError(payload => of(throwError({ payload })))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}