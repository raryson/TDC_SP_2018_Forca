import { Component, OnInit } from '@angular/core';
import { Panel } from 'src/app/panel/panel.model';

@Component({
  selector: 'forc-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  modelPanel: Panel;
  constructor() { }

  ngOnInit() {
    this.modelPanel = { lifes: 6, name: "Fernando", win: false, lose: false }
  }

}
