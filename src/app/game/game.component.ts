import { Component, OnInit } from '@angular/core';
import { Panel } from 'src/app/panel/panel.model';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  selector: 'forc-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [PubNubAngular]
})
export class GameComponent implements OnInit {
  modelPanel: Panel;
  pubnub: PubNubAngular;
  channel: string;
  userChannel : string;
  constructor(pubnub: PubNubAngular) {
    this.channel = 'jogando'
    this.userChannel = 'usuario'

    this.pubnub = pubnub

    this.pubnub.init({
      publishKey: 'pub-c-bddd3276-8045-43cc-bc90-35b4b09e93f7',
      subscribeKey: 'sub-c-1bfc82f2-7d97-11e8-a43f-d6f8762e29f7'
    })

    this.pubnub.subscribe({
      channels: [this.channel, this.userChannel],
      triggerEvents: ['message']
    })

    this.pubnub.publish({
      channel: this.channel, message: "funcionou"
    })

    pubnub.getMessage(this.channel, function (msg) {
      console.log(msg.message);
    })

    pubnub.getMessage(this.userChannel, (msg) => {
      this.modelPanel.name = msg.message
    })

  }

  ngOnInit() {
    this.modelPanel = { lifes: 6, name: "Fernando", win: false, lose: false }
  }

}
