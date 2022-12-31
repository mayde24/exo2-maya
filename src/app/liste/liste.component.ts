import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  movieName: string | undefined;
  moviePoster: string | undefined;


  ngOnInit() {
    this.movieName = '';
    this.moviePoster = '';
  }

  public movieToShow(name: string, poster: string) {
    this.movieName = name;
    this.moviePoster = poster;
  }

}
