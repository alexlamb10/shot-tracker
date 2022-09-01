import { Component, OnInit, NgModule } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms'

@Component({
  selector: 'st-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css']
})
export class ShotsComponent implements OnInit {

  constructor() { }

   players = [
    {id: 1, name: 'Alex Lamb'},
    {id: 2, name: 'Preston Lamb'},
    {id: 3, name: 'Zack Lamb'},
    {id: 4, name: 'Blake Lamb'},
    {id: 5, name: 'Jaren Lamb'}
    
  ]

  stats = {
    practice: null,
    ftMakes: null,
    ftMisses: null,
    spotMakes: null,
    spotMisses: null,
    midMakes: null,
    midMisses: null,
    threeMakes: null,
    threeMisses: null,
    hustle: null
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit' + form.valid);
    
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ' + field.valid);
    
  }

}
