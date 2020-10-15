import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 

  constructor(private db:DatabaseService) { }


  section =1;
  title = '';
  year=0;
  rating=0.0;
  movieDB: any[]=[];
  aYear=0;
  actorDB:any[]=[];
  actorId='';
  movieId='';

  ngOnInit(): void {
    this.onGetMovie();
    this.onGetActor();
  }

  onGetMovie(){
    this.db.getMovie().subscribe((data: any[])=>{
      this.movieDB=data;
    })
  }

  onSaveMovie(){
    let obj={title:this.title,year:this.year,rating:this.rating};
    this.db.addMovie(obj).subscribe(data=>{
      this.onGetMovie();
    });
  }

  changeSection(id){
    this.section=id;
  }

  onDeleteMovie(item){
    this.db.deleteMovieById(item._id).subscribe((data:String)=>{
      this.onGetMovie();
    })
  }

  onDeleteMovieByYear(){
    let year =this.aYear;
    this.db.deleteMovieByYear(year).subscribe(data=>{
      this.onGetMovie();
    })
  }

  onGetActor(){
    this.db.getActor().subscribe((data: any[])=>{
      this.actorDB=data;
    })
  }


  onAddActorToMovie(){
    let a=this.movieId;
    let b ={actors:this.actorId}
    this.db.addActorToMovie(a,b).subscribe(data=>{
      this.onGetMovie();
    })
  }

}
