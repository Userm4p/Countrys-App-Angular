import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  @Input() placeholder !: string;


  debouncer: Subject<string> = new Subject();

  query: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )  
    .subscribe( query => {
      this.onDebounce.emit(query);
    } )
  }

  buscar(){
    this.onEnter.emit(this.query)
  }

  OnPress(){
    
    this.debouncer.next(this.query)

  }
}
