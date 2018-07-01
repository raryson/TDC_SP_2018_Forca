import { BrowserModule } from '@angular/platform-browser';
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
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
