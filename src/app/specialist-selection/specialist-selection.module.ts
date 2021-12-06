import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialistSelectionComponent } from './specialist-selection.component';
import { provideRoutes } from '@angular/router';


@NgModule({
  declarations: [SpecialistSelectionComponent],
  imports: [
    CommonModule
  ],
  providers : [
    provideRoutes([{path: '', component: SpecialistSelectionComponent}])
  ]
})
export class SpecialistSelectionModule { }
