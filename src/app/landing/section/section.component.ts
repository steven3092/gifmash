import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() gif;

  public clicked = false;

  constructor(private _data: DataService) { }

  ngOnInit(): void {
  }


  handleClick(value: string) {

    this.clicked = true;

    setTimeout(() => {
      this._data.handleModification(value)
      this.clicked = false;
    }, 300);
  }
}
