import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CityModel } from '../../app.model';

@Component({
  selector: 'app-SelectCity',
  templateUrl: './SelectCity.component.html',
  styleUrls: ['./SelectCity.component.css']
})
export class SelectCityComponent implements OnInit {

  @Input() citiesList: CityModel[];

  @Input() set form([f, name]: [FormGroup, string]) {
    f.setControl(name, this.cityForm);
  }

  @Output() onCitySelect = new EventEmitter();

  cityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cityForm = fb.group({
      'citySelect': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

   onCityChange(event: Event, index: number): void {
     if (this.cityForm.valid) {
       this.onCitySelect.emit({ selectedCity: this.cityForm.get('citySelect').value });
     }
  }

}
