import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';
import * as moment from 'moment-mini';

import { FetchDoctors } from './store/specialist-selection.actions';
import { AppState } from '../store/app.reducers';
import { SpecialistSelectionService } from './specialist-selection.service';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-specialist-selection',
  templateUrl: './specialist-selection.component.html',
  styleUrls: ['./specialist-selection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecialistSelectionComponent implements OnInit {

  doctors:any;
  formControl = new FormControl();
  data:any={
    doctor_id: 0,
    patient_name: '',
    patient_contact:'',
    gender:'',
    timestamp: ''
  };

  constructor(
    private store: Store<AppState>,
    private changeDetectorRef: ChangeDetectorRef,
    private dataService: SpecialistSelectionService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchDoctors({}))

    this.store.select('specialities').subscribe((data: any) => {
      console.log(data)
      this.changeDetectorRef.markForCheck();
    })
  }

  onFetchDoctor(value: any) {
      this.doctors = this.dataService.fetchDoctoresData().map((el:any) => {
        return el
      })
  }
  bookAppoinment(){
    if(this.checkAvailability()){
      this.dataService.addAppointment(this.data)
    }else{
      //Need to send error notification here
    }
  }

  checkAvailability(){
    let No_of_appoinments:any = this.dataService.fetchDoctorAppoinmentsHistory().filter(((el: any) => {
      return el.doctor_id === this.data.id
    }))
    if(No_of_appoinments.lenght<this.data.max_appoinments){
      return true
    }
    return false
  }

  selectTreatmentType(event: any){
    let list:any=this.dataService.fetchDoctorAppoinmentsHistory()
    this.data['doctor_id'] = event.id
    this.data['timestamp'] = moment(list[-1].timestamp).add(20,'minutes')
    this.data['fee']= event.fee
    this.changeDetectorRef.markForCheck()
    
  }
}
