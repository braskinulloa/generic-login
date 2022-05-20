import { ActionReducerMap } from "@ngrx/store";
import { ErrorReducer, ErrorState, AuthReducer, AuthState } from "./reducers";

export interface AppState {
    auth: AuthState
    error: ErrorState
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: AuthReducer,
    error: ErrorReducer
}