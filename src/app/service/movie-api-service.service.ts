import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "86da645f69e49100ed533af0bb14f587";

  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`) ;
  }

  trendingMovieApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/all/day?api_key=${this.apikey}`)
  }

  getSearchMovie(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}`)
  }

}
