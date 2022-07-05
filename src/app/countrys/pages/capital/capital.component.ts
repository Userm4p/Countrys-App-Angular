import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countrys.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent{

  query: string = ''
  error: boolean = false;
  countrys : Country[] = []

  constructor( private CountryService : CountryService ) { }

  buscar (query:string) {
    this.error = false;
    this.query = query;

    this.CountryService.searchCountryByCapital(this.query)
      .subscribe((resp) => {
        console.log(resp);
        this.countrys = resp;
      }, (error) => {
        this.error=true;
        console.log(error);
        this.countrys = [];
      });
    
    this.query = ''
  }

  autocomplete(query: string){
    this.error=false;
  }

}
