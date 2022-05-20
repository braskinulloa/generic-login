import { UserI } from './../../shared/interfaces';
import { createAction, props } from '@ngrx/store';

export const loginUser = createAction(
  '[Login Page] Login',
  props<{ usernameOrEmail: string, password: string; }>()
);

export const loginUserSuccess = createAction(
    '[Login Page] Login Success', 
    props<{ user: UserI, token: string }>());
    
export const loginUserError = createAction(
    '[Login Page] Login Error', 
    props<{ payload: any }>());