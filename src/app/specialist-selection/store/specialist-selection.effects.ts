import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';

import * as SpecialistSelectionActions from './specialist-selection.actions';
import { SpecialistSelectionService } from '../specialist-selection.service';

@Injectable()
export class SpecialistSelectionEffects {
  constructor(private actions$: Actions, private dataService: SpecialistSelectionService,
    private router: Router) { }

// @Effect() FetchDoctorData$:any = this.actions$
//   .pipe(ofType(SpecialistSelectionActions.FETCH_DOCTORS_DATA))
//   .pipe(switchMap(action => {
//     console.log("In effects")  
//     return this.dataService.fetchDoctoresData()
//     .pipe(
//       map((data: any) => {
//         return new SpecialistSelectionActions.FetchDoctorsCompleted(data)
//       }),
//       catchError((err) => of(new SpecialistSelectionActions.FetchDoctorsError(err)))
//     );
//   }));

}