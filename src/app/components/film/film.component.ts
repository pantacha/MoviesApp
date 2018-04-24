import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmsService} from '../../services/films.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent implements OnInit {

  film: any;

  constructor(private route: ActivatedRoute, public _filmService: FilmsService,
              private router: Router) {

    this.route.params.subscribe(parametros => {

      this._filmService.getFilm(parametros['id'])
                            .subscribe((film) => {
                              console.log(parametros);
                              this.film=film;
                              console.log(film);
                            })

    })
  }

  ngOnInit() {
  }

  regresarASearch(){
    this.router.navigate(['search']);
  }

  regresarAHome(){
    this.router.navigate(['home']);
  }

}
