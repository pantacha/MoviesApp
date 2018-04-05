import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
<<<<<<< HEAD
import {FilmsService} from '../../services/films.service';
import {Router} from '@angular/router';
=======
>>>>>>> 0dc2f5dca7802c3044f79e9fed6605c23c5d3c26

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent implements OnInit {

  film: any;

<<<<<<< HEAD
  constructor(private route: ActivatedRoute, public _filmService: FilmsService,
              private router: Router) {

    this.route.params.subscribe(parametros => {

      this._filmService.getFilm(parametros['id'])
                            .subscribe((film) => {
                              console.log(parametros);
                              this.film=film;
                              console.log(film);
                            })
=======
  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(parametros => {
      console.log(parametros);
      
>>>>>>> 0dc2f5dca7802c3044f79e9fed6605c23c5d3c26
    })
  }

  ngOnInit() {
  }

<<<<<<< HEAD
  regresarASearch(){
    this.router.navigate(['search']);
  }

  regresarAHome(){
    this.router.navigate(['home']);
  }


=======
>>>>>>> 0dc2f5dca7802c3044f79e9fed6605c23c5d3c26
}
