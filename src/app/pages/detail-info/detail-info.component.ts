import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../share/shared.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AiPerson } from '../../classes/ai-person.class';
import { imageGenerateService } from '../../services/image-generate.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrl: './detail-info.component.scss'
})
export class DetailInfoComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  loading: boolean = false;
  aiPerson = new AiPerson()


  get f() {
    return this.form.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private shareService: SharedService,
    private route: ActivatedRoute,
    private imageGenerateService: imageGenerateService
  ) {
    this.form = this.formBuilder.group({
      physical: [''],
      personal: [''],
    });

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {

      if (params.get('location')) {
        this.aiPerson.location = String(params.get('location'))
      }

      if (params.get('age')) {
        this.aiPerson.dob = String(params.get('age'))
      }


      if (params.get('gender')) {
        this.aiPerson.gender = String(params.get('gender'))
      }


    })
  }

  getGenerateImage() {

    let prompt = 'A ' + this.aiPerson.gender + ', age is ' + this.aiPerson.dob + ' and live in ' + this.aiPerson.location
    let extraPrompt = ''
    let finalPrompt = ''
    if (this.f['physical'].value != '') {
      extraPrompt = prompt + 'and physical apperance is' + this.f['physical'].value
    }

    if (this.f['personal'].value) {
      extraPrompt = extraPrompt + + ' and personal character is' + this.f['personal'].value
    }


    this.imageGenerateService.generateImage(prompt).toPromise()
      .then((response: any) => {
        this.loading = false
        console.log(response, 'response')
        this.shareService.aiPerson.image = response.data
        this.shareService.router.navigate(['person-detail', '1'])
      })
  }

  submitData() {
    this.loading = true
    this.submitted = true;

    if (this.form.invalid) {
      this.loading = false;
      return;
    }


    this.getGenerateImage()



  }
}
