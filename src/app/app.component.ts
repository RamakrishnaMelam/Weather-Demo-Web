import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './components/Search/Search.service';
import { Weather, CityModel, defaultWeather } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherForm = new FormGroup({});
  cities: CityModel[];
  weatherReport: Weather;
  hasCitiesServiceFailed = false;
  hasWeatherServiceFailed = false;

  constructor(private _searchService: SearchService) { }

  onCountrySearched(event) {
    this.cities = [];
    this.weatherReport = defaultWeather;
    this._searchService.getCitiesByCountry(event.searchCountry)
      .subscribe(response => this.cities = response,
      Error => {
        this.getCitiesByCountryFromMockService(event);
      });
  }

  getCitiesByCountryFromMockService(event) {
    this.cities = [];
    this.weatherReport = defaultWeather;
    this._searchService.getCitiesByCountryFromMock(event.searchCountry)
      .subscribe(response => this.cities = response,
      Error => {
        this.hasCitiesServiceFailed = true;
      });
  }
  onCitySelected(event) {
    const result = this._searchService.getWeatherReport(
      this.weatherForm.controls['searchForm'].get('searchCountry').value,
      event.selectedCity)
      .subscribe(response => this.weatherReport = response,
      Error => {
        this.getWeatherReportFromMockService(event);
      });
  }

  getWeatherReportFromMockService(event) {
    const result = this._searchService.getWeatherReport(
      this.weatherForm.controls['searchForm'].get('searchCountry').value,
      event.selectedCity)
      .subscribe(response => this.weatherReport = response,
      Error => {
        this.hasWeatherServiceFailed = true;
      });
  }

  resetMessages() {
    this.hasCitiesServiceFailed = false;
    this.hasWeatherServiceFailed = false;
  }
}
