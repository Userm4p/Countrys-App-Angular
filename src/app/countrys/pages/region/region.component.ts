import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countrys.interfaces';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',]
  regionActiva: string = ''
  Countrys: Country[] = []
  error: boolean = false;

  constructor( private CountryService: CountryService) { }

  getCssClass(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string): void {

    if( region === this.regionActiva) {return;}

    this.regionActiva = region
    this.Countrys = [];

    this.CountryService.searchRegion(region)
    .subscribe(data => { this.Countrys = data },
    (error) => {
      this.error=true;
      this.Countrys = [];
    })

  }


}
