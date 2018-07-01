import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/game/game.model';


@Component({
  selector: 'forc-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() model: Game;


  constructor() {
    this.model = { lifes: 6, name: "Fernando", win: true, lose: false }
  }

  ngOnInit() {

  }

}
