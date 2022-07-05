import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryComponent } from './countrys/pages/country/country.component';
import { RegionComponent } from './countrys/pages/region/region.component';
import { CapitalComponent } from './countrys/pages/capital/capital.component';
import { DetailsComponent } from './countrys/pages/details/details.component';

const routes: Routes = [
    {
        path: '',
        component: CountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: RegionComponent
    },
    {
        path:'capital',
        component: CapitalComponent
    },
    {
        path: 'pais/:id',
        component: DetailsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }

]

@NgModule({

    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule {}