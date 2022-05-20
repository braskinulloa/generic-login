import { Action, createReducer, on } from '@ngrx/store';
import { UserI } from 'src/app/shared/interfaces';
import { loginUser, loginUserError, loginUserSuccess } from '../actions';

export interface AuthState {
    authUser: UserI | null,
    token: string
}

export const initialAuthState: AuthState = {
    authUser: null,
    token: ''
};

const _authReducer = createReducer(
    initialAuthState,
    on(loginUser, (state, { usernameOrEmail, password }) => ({ ...state, usernameOrEmail, password })),
    on(loginUserSuccess, (state, { user, token }) => ({ ...state, authUser: {...user}, token })),
    on(loginUserError, (state, { payload }) => ({ ...state } )),
    
);

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
}