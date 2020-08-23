import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'
import { map, take, first } from 'rxjs/operators'
import { of, interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public _data: DataService) { }

  ngOnInit(): void {
    this._data.retrieveGifs();

    this._data.initialize();

    let preview = []
    let array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  }



}
