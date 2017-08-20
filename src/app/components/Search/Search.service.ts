import { CitiesByCountry, Weather } from '../../app.model';
import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchService {

    constructor(private http: Http) { }

    /* istanbul ignore next */
    getCitiesByCountry(request: string): Observable<CitiesByCountry[]> {
        // TODO remove, to use when api is available
        const url = 'assets/WeatherReport/CitiesByCountry.json';
        const headers = new Headers();
        return this.http.get(url, { headers: headers })
            .map((res: Response) => {
                const allCities: CitiesByCountry[] = <CitiesByCountry[]>res.json();
                return allCities.filter(city => city.country.toUpperCase().trim() === request.toUpperCase().trim());
            });
    }

    /* istanbul ignore next */
    getWeatherReport(country: string, city: string): Observable<Weather> {
        const url = 'assets/WeatherReport/Weather.json';
        const headers = new Headers();
        return this.http.get(url, { headers: headers })
            .map((res: Response) => {
                const weatherReport: Weather[] = <Weather[]>res.json();

                // tslint:disable-next-line:max-line-length
                return weatherReport.find(data => data.country.toUpperCase().trim() === country.toUpperCase().trim()
                    && data.location.toUpperCase().trim() === city.toUpperCase().trim());
            });
    }

    /* istanbul ignore next */
    handleError(error: Response) {
        return Observable.throw({
            status: error.status,
            statusText: error.statusText,
            message: 'error'
        });
    }
}
