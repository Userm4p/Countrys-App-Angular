import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countrys.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  @Input('countrys') countrys !: Country[];
  @Input('error') error !: boolean;

  constructor() { }


}
