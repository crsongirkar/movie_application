import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse, Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMovieList(

    ordering: string,
    search?:string
  ):  Observable<APIResponse<Movie>>
  {
    let parms=new HttpParams().set('ordering',ordering);

    if(search)
    {
      parms=new HttpParams().set('ordering', ordering).set('search',search);

    }
    return this.http.get<APIResponse<Movie>>(`${env.BASE_URL}/movies`, {
      params:parms,
    });
  }
  //searchData(title: string, type: SearchType): Observable<OmdbSearchResult>




}
