import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  game;
  incrementNumber = 0;
  @Output("gameStarted") gameEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.game = setInterval(()=>{this.gameEvent.emit(++this.incrementNumber)}, 1000);
  }

  stopGame() {
    clearInterval(this.game);
  }


}