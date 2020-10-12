import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServieService {

  constructor(private http:HttpClient) { }

  getMeh(){
    return this.http.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")
  }
}

