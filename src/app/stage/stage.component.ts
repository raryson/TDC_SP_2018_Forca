import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'forc-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  @Input() word: string
  @Input() letter: string
  wordToShow = []
  letters = []

  constructor() {

  }

  ngOnInit() {
    this.write()
  }

  write() {
    this.populateFiredLetters()
    this.populateShowLetters()

  }

  populateShowLetters() {
    this.wordToShow = this.word.split('').map(function (element) {
      element = element.toUpperCase()
      return this.letter.length > 0 && element == this.letter.toUpperCase() ? element : "_"
    }, this)

  }


  populateFiredLetters() {
    if (this.word.toUpperCase().indexOf(this.letter.toUpperCase()) < 0) {
      this.letters.push(this.letter.toUpperCase())
    }
  }





}
