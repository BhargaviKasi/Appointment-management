import { Action } from '@ngrx/store';

export const FETCH_DOCTORS_DATA = "FETCH_DOCTORS_DATA";
export const FETCH_DOCTORS_DATA_COMPLETED = "FETCH_DOCTORS_DATA_COMPLETED";
export const FETCH_DOCTORS_DATA_ERROR = "FETCH_DOCTORS_DATA_ERROR";

export class FetchDoctorsError implements Action {
    readonly type = FETCH_DOCTORS_DATA_ERROR;
    constructor(private payload: object) {console.log("----------------------")}
}

export class FetchDoctors implements Action {
    readonly type = FETCH_DOCTORS_DATA;
    constructor(private payload: object) {}
}

export class FetchDoctorsCompleted implements Action {
    readonly type = FETCH_DOCTORS_DATA_COMPLETED;
    constructor(private payload: object) {}
}


export type SpecialistSelectionActions =  FetchDoctors | FetchDoctorsCompleted | FetchDoctorsError ;
