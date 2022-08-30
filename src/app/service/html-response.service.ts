import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HtmlResponseService {
  url:string = 'https://www.upov.int/databases/en/plutonews.html';
  headers: HttpHeaders = new HttpHeaders({'Accept': 'text/html'});
  constructor(private http :HttpClient) {}

  get(){
    return this.http.get(this.url, { responseType: 'text' })
  }
}
