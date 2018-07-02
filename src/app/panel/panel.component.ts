import { Component, OnInit, Input } from '@angular/core';
import { Panel } from 'src/app/panel/panel.model';


@Component({
  selector: 'forc-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() model: Panel;
  @Input() word: string
  @Input() letter: string


  constructor() {
    
  }

  ngOnInit() {
    this.try()
  

  } 

  try(){   
    if (this.word.toUpperCase().indexOf(this.letter.toUpperCase()) < 0){
      this.model.lifes--
    }
  }

}
