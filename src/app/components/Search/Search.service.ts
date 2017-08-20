import { CityModel, Weather } from '../../app.model';
import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchService {

    constructor(private http: Http) { }

    /* istanbul ignore next */
    getCitiesByCountry(request: string): Observable<CityModel[]> {
        const url = 'http://localhost:58377/cities/' + request;
        const headers = new Headers();
        // const serviceRerequest = new Request({
        //     url: `http://localhost:58377/cities/` + request,
        //     method: RequestMethod.Get
        // });

        return this.http.request(url)
            .map(response => response.json() as CityModel[]);
    }

    getCitiesByCountryFromMock(request: string): Observable<CityModel[]> {
        // TODO remove, to use when api is available
        const url = 'assets/WeatherReport/CitiesByCountry.json';
        const headers = new Headers();
        return this.http.get(url, { headers: headers })
            .map((res: Response) => {
                const allCities: CityModel[] = <CityModel[]>res.json();
                return allCities.filter(city => city.Country.toUpperCase().trim() === request.toUpperCase().trim());
            })
            .catch(this.handleError);
    }

    /* istanbul ignore next */
    getWeatherReport(country: string, city: string): Observable<Weather> {
        const url = 'http://localhost:58377/Weather/' + country + '/' + city;
        const headers = new Headers();
        // const serviceRerequest = new Request({
        //     url: `http://localhost:58377/cities/` + request,
        //     method: RequestMethod.Get
        // });

        return this.http.request(url)
            .map(response => response.json() as Weather);
    }

    /* istanbul ignore next */
    getWeatherReportFromMock(country: string, city: string): Observable<Weather> {
        const url = 'assets/WeatherReport/Weather.json';
        const headers = new Headers();
        return this.http.get(url, { headers: headers })
            .map((res: Response) => {
                const weatherReport: Weather[] = <Weather[]>res.json();

                // tslint:disable-next-line:max-line-length
                return weatherReport.find(data => data.country.toUpperCase().trim() === country.toUpperCase().trim()
                    && data.location.toUpperCase().trim() === city.toUpperCase().trim());
            })
            .catch(this.handleError);
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
