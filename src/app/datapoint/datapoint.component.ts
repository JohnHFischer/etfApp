import { Component, OnInit } from '@angular/core';
import { dpListOne } from '../mock-data-points-one';
import { dpListTwo } from '../mock-data-points-two';
@Component({
  selector: 'app-datapoint',
  templateUrl: './datapoint.component.html',
  styleUrls: ['./datapoint.component.css']
})
export class DatapointComponent implements OnInit {

  datapoint = dpListOne;
  datapointT = dpListTwo;
  constructor() { }

  ngOnInit() {
  }

}
