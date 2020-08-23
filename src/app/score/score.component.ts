import { Component, OnInit, ViewChildren, QueryList, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { skip, filter } from 'rxjs/operators';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements AfterViewInit, OnDestroy {
  public sub: Subscription;

  public array = [];

  @ViewChildren("divs") divs: QueryList<ElementRef>;

  constructor(public _data: DataService, private renderer: Renderer2) {

    this.sub = this._data.gifs$.pipe(filter(x => x.length > 0)).subscribe(res => {
      if (res.length > 10) {
        this.array = res.slice(0, 10);
      } else {
        this.array = res
      }

    })
  }


  // On utilise pas OnInit car la variable divs est pas encore defini => que dans afterViewInit
  ngAfterViewInit(): void {

    this.sub = this._data.gifs$.pipe(filter(x => x.length > 0)).subscribe(res => {
      this.divs.forEach((x: ElementRef, i: number) => {
        // this.renderer.setStyle(x.nativeElement, 'transform', `scaleY(${this._data.counter[index]})`);
        this.renderer.setStyle(x.nativeElement, 'height', (this._data.gifs[i].counter * 100 / this._data.gifs[0].counter) + '%');
      })

    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
