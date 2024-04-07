import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AiPerson } from '../classes/ai-person.class';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  apiServer = environment.apiServer

  loading: boolean = false

  aiPerson = new AiPerson()

  constructor(
    public httpClient: HttpClient,
    public toastrService: ToastrService,
    public router: Router,
  ) {
  }



  public getRequestWithParams(url: string, params: HttpParams) {
    return this.httpClient.get(this.apiServer + url, { params: params });
  }

  public getRequest(url: string) {
    return this.httpClient.get(this.apiServer + url);
  }

  public postRequest(url: string, data: any) {
    return this.httpClient.post(this.apiServer + url, data)
  }

  public postRequestParam(url: string) {
    return this.httpClient.post(this.apiServer + url, null)
  }

  public putRequest(url: string, data: any) {
    return this.httpClient.put(this.apiServer + url, data)
  }

  public putRequestParam(url: string) {
    return this.httpClient.put(this.apiServer + url, null)
  }

  public deleteRequest(url: string, data: any) {
    return this.httpClient.delete(this.apiServer + url, data)
  }

  public deleteRequestParam(url: string) {
    return this.httpClient.delete(this.apiServer + url)
  }


  startLoading() {
    setTimeout(() => {
      this.loading = true
      document.body.classList.add('overflow-none');
    }, 100);

  }

  endLoading() {
    setTimeout(() => {
      this.loading = false
      document.body.classList.remove('overflow-none');
    }, 2000);
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }




}
