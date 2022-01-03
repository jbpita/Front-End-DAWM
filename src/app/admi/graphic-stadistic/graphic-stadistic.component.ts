import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from "angular-google-charts";

@Component({
  selector: 'app-graphic-stadistic',
  templateUrl: './graphic-stadistic.component.html',
  styleUrls: ['./graphic-stadistic.component.css']
})
export class GraphicStadisticComponent implements OnInit {

  @Input() type !: string;
  @Input() title !: string;
  @Input() data : [string , number][] = [];
  @Input() columnNames : [string , string] = ['' , ''] ;
  @Input() width  !: number;
  @Input() height !: number;
  @Input() options : {} ={}
  myType = ChartType.PieChart;

  constructor() { }

  ngOnInit(): void {
  }

}
