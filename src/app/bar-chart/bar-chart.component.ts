import { Component, OnInit } from '@angular/core';
import { dpListOne } from '../mock-data-points-one';
import { dpListTwo } from '../mock-data-points-two';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  //use the following datapoint imports to file the graph with information
  datapoint = dpListOne;
  datapointT = dpListTwo;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = ['TD Canada', 'Scotiabank', 'Royal Bank', 'Libro Credit Union', 'CIBC', 'Bank of America'];

  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [8, 3, 7, 6, 0, 2], label: 'ETF A'},
    {data: [1, 5, 3, 4, 6, 5], label: 'ETF B'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
