import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(public _filmsService: FilmsService) {
    this._filmsService.getCartelera()
                                .subscribe(film => {
                                  console.log(film);
                                  this.cartelera=film;
                                });
    this._filmsService.getPopulares()
                                    .subscribe(film => {
                                      console.log(film);
                                      this.populares=film;
                                    });
    this._filmsService.getPopularesNinos()
                                          .subscribe(film => {
                                            console.log(film);
                                            this.popularesNinos=film;
                                          })
  }

  ngOnInit() {
  }

}
