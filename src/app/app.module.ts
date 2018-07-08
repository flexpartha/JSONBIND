import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ReturnsJsonArrayService, ReturnsCountryService, ReturnsCountryFlagService} from './returns-json-array.service';
import {People} from './people.component';
import {Country} from './country.component';
import {CountryFlag} from './countryFlag.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { from } from 'rxjs/observable/from';

const appRoutes: Routes = [
  { path: 'people', component: People },
  { path: 'country', component: Country },
  { path: 'countryFlag', component: CountryFlag }
];

@NgModule({
  declarations: [
    AppComponent,People,Country,CountryFlag
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
