import { Component, OnInit, Input } from '@angular/core';
import { D } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie:D;
  constructor() { }

  ngOnInit(): void {
  }

}
