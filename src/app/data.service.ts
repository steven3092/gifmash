import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public gifs$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public get gifs() { return this.gifs$.getValue(); }
  public preview = [];

  constructor(public http: HttpClient) { }

  public initialize() {
    let stored = localStorage.getItem('gifs');

    if (stored) {
      this.gifs$.next(JSON.parse(localStorage.getItem('gifs')));
      this.preview = this.getRandomElements();

    } else {
      this.retrieveGifs().subscribe((res) => {
        this.gifs$.next(res.map(x => ({ id: x.id, url: 'https://media.giphy.com/media/' + x.id + '/giphy.gif', counter: Math.floor(Math.random() * 10) })));
        this.sortGifs();
        this.preview = this.getRandomElements();
      })
    }


  }

  public sortGifs() {
    this.gifs.sort((a, b) => b.counter - a.counter);
  };

  public retrieveGifs(): Observable<any> {
    return this.http.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC').pipe(map((x: any) => x.data)
    )
  }

  public getRandomElements(): any[] {
    let res = [];
    const random = Math.floor(Math.random() * this.gifs.length - 1);

    let el = this.gifs;
    res.push(el[random])
    res.push(el[random + 1])

    return res;
  }


  public handleModification(id: string) {
    let element = this.gifs.find(el => el.id === id);
    element.counter++;
    this.sortGifs();
    localStorage.setItem('gifs', JSON.stringify(this.gifs));

    this.preview = this.getRandomElements();
  }

}
