import { Component, OnInit } from '@angular/core';
import { D } from 'src/app/model/movie.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:D[];
  constructor(private appService:AppService) { }
  ngOnInit(): void {
    this.appService.searchedMovies.subscribe((movies:D[])=>{
      this.movies=movies
    })
    console.log(this.movies);
  }
}
