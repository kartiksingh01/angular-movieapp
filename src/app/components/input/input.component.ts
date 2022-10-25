import { Component, EventEmitter, OnInit } from '@angular/core';
import { D, Movie } from 'src/app/model/movie.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  movieName:string;
  clicked:boolean;
  movies:D[];
  constructor(private appService:AppService) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.appService.findMovies(this.movieName).subscribe({next:(response)=>{
      this.movies=response.d;
      this.appService.searchedMovies.emit(this.movies);
    }});
  }
  inputAnimation(){
    this.clicked=true;
  }

}
