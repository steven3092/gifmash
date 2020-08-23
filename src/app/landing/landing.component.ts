import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = 'Choisi ton GIF préféré';

  constructor(public _data: DataService) { }

  ngOnInit(): void {
  }



  public speak() {
    const utterance = new SpeechSynthesisUtterance(this.title)

    utterance.lang = 'FR';
    utterance.volume = 100

    window.speechSynthesis.speak(utterance)
  }

}
