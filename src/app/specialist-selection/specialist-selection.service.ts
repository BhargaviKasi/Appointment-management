import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialistSelectionService {

  doctors:any=[
    {
      id:1,
      name: 'Bhargavi',
      specialization: 'Dermatologists',
      max_appoinments: 10,
      fee: 400
    },
    {
      id:2,
      name: 'Varaprasad',
      specialization: 'Cardiologists',
      max_appoinments: 5,
      fee:1000
    },
    {
      id:3,
      name: 'Vijaya',
      specialization: 'Gastroenterologists',
      max_appoinments: 13,
      fee:500
    },
    {
      id:4,
      name: 'Manikanta',
      specialization: 'Hematologists',
      max_appoinments: 12,
      fee: 500
    }
  ]

  History:any =[
    {
      doctor_id: 1,
      timestamp: '05-12-2021 19:00:00',
      patient_name: 'abc',
      contact_no:'9876543421'
    },
    {
      doctor_id: 1,
      timestamp: '05-12-2021 19:20:00',
      patient_name:"sdjfhdjkf",
      contact_no:'9876543421'
    },
    {
      doctor_id: 2,
      timestamp: '05-12-2021 17:00:00',
      patient_name:"sdjfhdjkf",
      contact_no:'9876543421'
    },
    {
      doctor_id: 3,
      timestamp: '05-12-2021 18:10:00',
      patient_name:"sdjfhdjkf",
      contact_no:'9876543421'
    },
    {
      doctor_id: 1,
      timestamp: '05-12-2021 19:40:00',
      patient_name:"sdjfhdjkf",
      contact_no:'9876543421'
    },
    {
      doctor_id: 4,
      timestamp: '05-12-2021 16:00:00',
      patient_name:"sdjfhdjkf",
      contact_no:'9876543421'
    },
    {
      doctor_id: 2,
      timestamp: '05-12-2021 18:20:00',
      patient_name:"sdjfhdjkf",
      contact_no:'9876543421'
    },
    {
      doctor_id: 1,
      timestamp: '05-12-2021 20:05:00',
      patient_name:"sdjfhdjkf",
      contact_no:'9876543421'
    }
  ]
  constructor() { }

  fetchDoctoresData() {
    console.log("-------------------------------88888888888")
    return this.doctors
  }

  fetchDoctorAppoinmentsHistory() {
    return this.History
  }

  addAppointment(data:any) {
    this.History.add(data)
  }
}
