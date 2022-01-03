import { Component, OnInit } from '@angular/core';
import { ChartType } from "angular-google-charts";

@Component({
  selector: 'app-stadistic',
  templateUrl: './stadistic.component.html',
  styleUrls: ['./stadistic.component.css']
})
export class StadisticComponent implements OnInit {
  myType = ChartType.PieChart;
  title : string = "BATERIAS VENDIDAS";
  //type  : string = "PieChart";
  data = [
     ["Bateria 1", 45.0],
     ["Bateria 2", 26.8],
     ["Bateria 3", 12.8],
  ];
  columnNames = ["Browser", "Percentage"];
  options = {    
  };
  width  : number = 400;
  height : number = 400;


  myType2 = ChartType.PieChart;
  title2 : string = "Marcas vendidas VENDIDAS";
  //type  : string = "PieChart";
  data2 = [
     ["Marca 1", 55.0],
     ["Marca 2", 26.8],
     ["Marca 3", 22.8],
  ];
  columnNames2 = ["Browser", "Percentage"];
  options2 = {    
  };
  width2  : number = 400;
  height2 : number = 400;


  constructor() { }

  ngOnInit(): void {
  }

}