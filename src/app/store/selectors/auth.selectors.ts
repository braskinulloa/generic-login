import { AppState } from './../app.reducers';
import { createSelector } from '@ngrx/store';
import { AuthState } from '../reducers';

export const authFeature = (state: AppState) => state.auth;

export const getStateAuthUser = createSelector(
    authFeature,
    (state: AuthState) => state.authUser
  );