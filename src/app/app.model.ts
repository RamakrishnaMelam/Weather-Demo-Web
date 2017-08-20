export interface CityModel {
    City: string;
    Country: string;
}

export interface Weather {
    country: string;
    location: string;
    time: string;
    wind: string;
    visibility: string;
    skyConditions: string;
    temperature: string;
    dewPoint: string;
    relativeHumidity: string;
    pressure: string;
}

export const defaultWeather: Weather = {
    country: '',
    location: '',
    time: '',
    wind: '',
    visibility: '',
    skyConditions: '',
    temperature: '',
    dewPoint: '',
    relativeHumidity: '',
    pressure: ''
};


