import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SelectModule } from 'angular2-select';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/Search/Search.component';
import { SearchService } from './components/Search/Search.service';
import { WeatherReportComponent } from './components/WeatherReport/WeatherReport.component';
import { SelectCityComponent } from './components/SelectCity/SelectCity.component';
import { LoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SelectCityComponent,
    WeatherReportComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    SelectModule,
    LoadingModule
  ],

  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
