import { Component, OnInit } from '@angular/core';
import {RollService} from '../../service/roll.service';

function aggregate(arr) {
  return arr.reduce((total, currentVal) => total + currentVal, 0);
}

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  playerDiceList = [];
  opponentDiceList = [];
  gameStarted = false;

  constructor(private service: RollService) { }

  ngOnInit() {
  }

  isGameStarted(): boolean {
    return this.gameStarted;
  }

  startGame() {
    this.gameStarted = true;
    this.service.roll().subscribe(num => {
      this.opponentDiceList = [num];
    });
  }

  playerRoll() {
    this.service.roll().subscribe(num => {
      this.playerDiceList.push(num);
    });
  }

  opponentRoll() {
    this.service.roll().subscribe(num => {
      this.opponentDiceList.push(num);
    });
  }

  isGameLost(): boolean {
    // let playerSum = 0;
    //
    // for (const num of this.playerDiceList) {
    //   playerSum += num;
    // }
    if (!this.playerDiceList.length) {
      return false;
    }

    const playerSum = aggregate(this.playerDiceList);
    const opponentSum = aggregate(this.opponentDiceList);

    if (opponentSum >= playerSum && this.opponentDiceList.length === 2) {
      return true;
    }

    return playerSum > 12;
  }
}
