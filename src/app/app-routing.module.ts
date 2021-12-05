import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpecialistSelectionComponent } from './specialist-selection/specialist-selection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: SpecialistSelectionComponent,
  },
  {
    path: 'about',
    component: SpecialistSelectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }