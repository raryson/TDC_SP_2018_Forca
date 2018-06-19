import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forc-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  word: string =  "PALAVRA"
  wordToShow: any[]=["P","A","_","A","_","_","A"] 
  letters:any[]=["Z","Y"]

  constructor() { }

  ngOnInit() {
  }

}
