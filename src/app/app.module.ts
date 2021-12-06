import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonModule } from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';

import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SpecialistSelectionComponent } from './specialist-selection/specialist-selection.component';
import { reducers } from './store/app.reducers';
import { SpecialistSelectionEffects } from './specialist-selection/store/specialist-selection.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpecialistSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    MatInputModule,
    MatFormFieldModule,    
    MatAutocompleteModule,
    CalendarModule,
    FormsModule,
     RadioButtonModule ,
    ReactiveFormsModule,
    EffectsModule.forRoot([SpecialistSelectionEffects]),
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
  ],
  exports: [
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
