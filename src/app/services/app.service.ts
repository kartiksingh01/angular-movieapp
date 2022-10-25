import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http"
import { D, Movie } from '../model/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  movies:Movie[];
  constructor(private http:HttpClient) { }
  searchedMovies = new EventEmitter<D[]>();

  findMovies(queryMovie:string){
    return this.http.get<Movie>(environment.movieApiBaseUrl,{
      headers:new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyValue),
      params:new HttpParams()
      .set('q',queryMovie)
    })
  }
}
