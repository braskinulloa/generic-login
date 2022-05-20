import { Action, createReducer, on } from '@ngrx/store';
import { throwError } from '../actions';

export interface ErrorState {
    error: Error | null
}

export const initialErrorState: ErrorState = {
    error: null
};

const _errorReducer = createReducer(
    initialErrorState,
    on(throwError, (state, { payload }) => ({ ...state, payload } )),
    
);

export function ErrorReducer(state: ErrorState | undefined, action: Action) {
    return _errorReducer(state, action);
}