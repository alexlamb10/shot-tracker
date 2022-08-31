import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

}
