SearchService) { }

  onCountrySearched(event) {
    this.cities = [];
    this.weatherReport = defaultWeather;
    this.loading = true;
    this._searchService.getCitiesByCountry(event.searchCountry)
      .subscribe(response => { this.cities = response, this.loading = false; },
      Error => {
        this.getCitiesByCountryFromMockService(event);
      });
  }

  getCitiesByCountryFromMockService(event) {
    this.cities = [];
    this.weatherReport = defaultWeather;
    this._searchService.getCitiesByCountryFromMock(event.searchCountry)
      .subscribe(response => { this.cities = response, this.loading = false; },
      Error => {
        this.hasCitiesServiceFailed = true;
        this.loading = false;
      });
  }
  onCitySelected(event) {
    this.loading = true;
    const result = this._searchService.getWeatherReport(
      this.weatherForm.controls['searchForm'].get('searchCountry').value,
      event.selectedCity)
      .subscribe(response => {this.weatherReport = response, this.loading = false; },
      Error => {
        this.getWeatherReportFromMockService(event);
      });
  }

  getWeatherReportFromMockService(event) {
    const result = this._searchService.getWeatherReportFromMock(
      this.weatherForm.controls['searchForm'].get('searchCountry').value,
      event.selectedCity)
      .subscribe(response => {this.weatherReport = response, this.loading = false; },
      Error => {
        this.hasWeatherServiceFailed = true;
        this.loading = false;
      });
  }

  resetMessages() {
    this.hasCitiesServiceFailed = false;
    this.hasWeatherServiceFailed = false;
  }
}
