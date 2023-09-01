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
    console.log(data,'movie#');
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }

  getMovieDetails(data:any):Observable<any>
  {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  getActionMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
  }

  getAdventureMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
  }

  getAnimationMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
  }

  getComedyMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
  }

  getCrimeMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=80`)
  }

  getDocumentaryMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
  }

  getDramaMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=18`)
  }

  getFamilyMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=10751`)
  }

  getFantasyMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=14`)
  }

  getHistoryMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=36`)
  }

  getHorrorMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=27`)
  }

  getMusicMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=10402`)
  }

  getMysteryMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=9648`)
  }

  getRomanceMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=10749`)
  }

  getScienceFictionMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
  }

  getThrillerMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
  }

  getWesternMovies():Observable<any>
  {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=37`)
  }



}
