import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/countrys.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  searchCountry(query: string) : Observable<Country[]> {

    const url = `${this.apiUrl}/name/${query}`
    
    return this.http.get<Country[]>(url)


  }

  searchCountryByCapital(query: string) : Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${query}`
    
    return this.http.get<Country[]>(url)


  }

  searchCountryByCode(code : string) : Observable<Country>{
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country>(url);
  }

  searchRegion(region: string) : Observable<Country[]> {
    const url = `https://restcountries.com/v2/regionalbloc/${region}`
    return this.http.get<Country[]>(url);
  }

}
