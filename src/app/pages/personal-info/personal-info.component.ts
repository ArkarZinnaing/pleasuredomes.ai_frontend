import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../share/shared.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent {

  selectedAge: any;
  form!: FormGroup;
  countries: any = [];

  ageOption: any = [
    {
      id: '1',
      desc: 'Between 18 - 25'
    },
    {
      id: '2',
      desc: 'Between 25 - 30'
    },
    {
      id: '3',
      desc: 'Between 35 - 40'
    },
    {
      id: '4',
      desc: 'Between 45 -50'
    },
    {
      id: '5',
      desc: 'Between 55 -60'
    }
  ]



  get f() {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private shareService: SharedService,
    private countryService: CountryService
  ) {
    this.form = this.formBuilder.group({
      location: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    this.getCountryData()
  }


  getCountryData() {
    this.countryService.getCountries().toPromise().then((data: any) => {
      this.countries = data;
      console.log(this.countries, 'country')
    });
  }

  selectAge(ageOption: any) {
    this.selectedAge = (this.selectedAge === ageOption) ? null : ageOption;
    this.f['age'].setValue(this.selectedAge.desc)
  }

  submitData() {

    let aiModelData: any = {}
    aiModelData.location = this.f['location'].value
    aiModelData.age = this.f['age'].value
    aiModelData.gender = this.f['gender'].value

    if (aiModelData.location == '') {
      this.shareService.toastrService.error('Please select location!')
    } else if (aiModelData.age == '') {
      this.shareService.toastrService.error('Please select age!')
    } else if (aiModelData.gender == '') {
      this.shareService.toastrService.error('Please select gender!')
    } else {
      this.shareService.router.navigate(['detail-info'], { queryParams: { location: aiModelData.location, age: aiModelData.age, gender: aiModelData.gender } })
    }




  }




}
