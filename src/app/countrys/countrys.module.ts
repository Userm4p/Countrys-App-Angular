import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapitalComponent } from './pages/capital/capital.component';
import { DetailsComponent } from './pages/details/details.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryComponent } from './pages/country/country.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';





@NgModule({
  declarations: [
    CapitalComponent,
    DetailsComponent,
    RegionComponent,
    CountryComponent,
    TableComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CapitalComponent,
    DetailsComponent,
    RegionComponent,
    CountryComponent
  ]
})
export class CountrysModule { }
