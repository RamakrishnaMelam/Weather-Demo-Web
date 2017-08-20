import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CityModel, Weather } from '../../app.model';
import { Observable } from 'rxjs/Observable';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() set form([f, name]: [FormGroup, string]) {
    f.setControl(name, this.searchForm);
  }
  @Output() onCountrySearch = new EventEmitter();
  searchForm: FormGroup;



  titleAlert = 'This field is required';
  errorMessage: string;

  constructor(private fb: FormBuilder) {
    this.searchForm = fb.group({
      'searchCountry': ['', Validators.required],
      'validate': ''
    });
  }

  ngOnInit() {}

  onSearch() {
    if (this.searchForm.valid) {
      this.onCountrySearch.emit({ searchCountry: this.searchForm.get('searchCountry').value });
    }
  }
}


