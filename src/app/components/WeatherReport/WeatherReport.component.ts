import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../app.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-WeatherReport',
  templateUrl: './WeatherReport.component.html',
  styleUrls: ['./WeatherReport.component.css']
})
export class WeatherReportComponent implements OnInit {
  @Input() weatherReport: Weather;

  constructor() { }

  ngOnInit() {
  }

}
