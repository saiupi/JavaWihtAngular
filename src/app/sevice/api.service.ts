import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { };
  getMethod(){
    //this.httpService.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");
    return this.http.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");
  }
}
