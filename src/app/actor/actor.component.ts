import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  constructor(private db:DatabaseService) { }

  section = 1;
  fullName='';
  bYear=0;
  actorsDB: any[]=[];

  ngOnInit(): void {

    this.onGetActors();
  }

  onGetActors(){
    this.db.getActors().subscribe((data: any[])=>{
      this.actorsDB=data;
    })
  }

  onSaveActor(){
    let obj={name:this.fullName,bYear:this.bYear};
    this.db.addActor(obj).subscribe(data=>{
      this.onGetActors();
    });
  }

  changeSection(id){
    this.section=id;
  }

  changeClass(id){
    if(id==this.section)
      return "btn-primary"
    else return "btn-danger"
  }

}
