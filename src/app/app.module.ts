import { BrowserModule } from '@angular/platform-browser';
import { PubNubAngular } from 'pubnub-angular2';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { StageComponent } from './stage/stage.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
   declarations: [
      AppComponent,
      GameComponent,
      StageComponent,
      PanelComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [PubNubAngular],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
