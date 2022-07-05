import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countrys.interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  country !: Country[];

  constructor(private activatesRoute: ActivatedRoute, private CountryService: CountryService) { }


  ngOnInit(): void {

    this.activatesRoute.params
      .pipe(
        switchMap((params: any) => this.CountryService.searchCountryByCode(params.id)),
        tap(console.log)
      )
      .subscribe((resp:Country[]) => {
        this.country = resp
      })
  }

}
