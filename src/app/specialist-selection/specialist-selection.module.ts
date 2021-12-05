import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialistSelectionComponent } from './specialist-selection.component';
import { provideRoutes } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [SpecialistSelectionComponent],
  imports: [
    CommonModule,
    AutoCompleteModule
  ],
  providers : [
    provideRoutes([{path: '', component: SpecialistSelectionComponent}])
  ]
})
export class SpecialistSelectionModule { }
