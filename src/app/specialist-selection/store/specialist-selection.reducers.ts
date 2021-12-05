import * as SpecialistSelectionActions from './specialist-selection.actions'

export interface State {
    doctorsData:Array<[]>,
    isLoading: boolean
  }
  const initialState: State = {
    doctorsData:[],
    isLoading: true
  };
  
  export function selectionReducer(state = initialState, action: any) {
    switch (action.type) {
        case (SpecialistSelectionActions.FETCH_DOCTORS_DATA):
            return {
                ...state,
                isLoading:true
            };
        case (SpecialistSelectionActions.FETCH_DOCTORS_DATA_COMPLETED) :
            return {
                ...state,
                isLoading:false,
                doctorsData:action['payload']
            };
        case (SpecialistSelectionActions.FETCH_DOCTORS_DATA_ERROR):
            return {
                ...state,
                isLoading:true
            };
        default:
            return state;
    }
  }
  