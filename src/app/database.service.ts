import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions={
  headers:new HttpHeaders({"Content-Type":"application/json"}),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getActors(){
    let actors;
    actors=this.http.get('/actors');
    return actors;
  }

  getActor(){
    let actors;
    actors=this.http.get('/actors');
    return actors;
  }

  addActor(actor){
    return this.http.post('/actors',actor,httpOptions);

  }

  getMovie(){
    return this.http.get('/movies');
  }

  addMovie(movie){
    return this.http.post('/movies',movie,httpOptions);
  }

  deleteMovieById(id){
    let url ="/movies/"+ id;
    return this.http.delete(url, httpOptions);
  }

  deleteMovieByYear(year){
    let url = "/movie/"+year;
    return this.http.delete(url,httpOptions);
  }

  addActorToMovie(a,b){
    let url ="/movies/actors/"+a;
    return this.http.put(url,b,httpOptions);
  }


}
