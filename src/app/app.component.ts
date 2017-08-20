import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './components/Search/Search.service';
import { Weather, CitiesByCountry, defaultWeather} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherForm = new FormGroup({});
  cities: CitiesByCountry[];
  weatherReport: Weather;

  constructor(private _searchService: SearchService) { }


  onCountrySearched(event) {
    this.cities = [];
    this.weatherReport = defaultWeather;
    this._searchService.getCitiesByCountry(event.searchCountry)
       .subscribe(response => this.cities = response);
  }

  onCitySelected(event) {
    const result = this._searchService.getWeatherReport(
      this.weatherForm.controls['searchForm'].get('searchCountry').value,
      event.selectedCity)
      .subscribe(response => this.weatherReport = response);
  }

}
