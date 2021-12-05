import { ActionReducerMap } from '@ngrx/store';

import * as SpecialistSelectionReducers from '../specialist-selection/store/specialist-selection.reducers'

export interface AppState {
  specialities: SpecialistSelectionReducers .State;
}

export const reducers: ActionReducerMap<AppState> = {
  specialities: SpecialistSelectionReducers.selectionReducer
};
