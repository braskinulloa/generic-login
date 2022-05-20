import { createAction, props } from '@ngrx/store';

export const throwError = createAction(
  '[Error] Throw error',
  props<{ payload: any }>()
);