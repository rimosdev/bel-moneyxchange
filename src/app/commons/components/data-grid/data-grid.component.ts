import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input() _title;
  @Input() _keys;
  @Input() _data;

  constructor() { }

  ngOnInit() {
  }

}
