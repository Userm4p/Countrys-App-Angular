import { Component } from '@angular/core';
import { Country } from '../../interfaces/countrys.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent{

  query: string = ''
  error: boolean = false;
  countrys : Country[] = []
  showAutocomplete: boolean = false;

  autocompleteCounties: Country[] = [];

  constructor( private CountryService : CountryService ) { }


  buscar (query:string) {
    this.error = false;
    this.query = query;

    this.CountryService.searchCountry(this.query)
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
    this.showAutocomplete = true;
    this.error=false;
    this.query = query;

    this.CountryService
    .searchCountry(query)
    .subscribe(resp => {
      this.autocompleteCounties = resp.splice(0, 5)
    }, error => {
      this.autocompleteCounties = [];
    })
  }

  searchAutocomplete(query: string) {
    this.showAutocomplete = false;
    this.buscar( query );
  }

}
