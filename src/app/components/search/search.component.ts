import { Component, OnInit } from '@angular/core';
import {FilmsService} from '../../services/films.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  buscar: string = "";

  constructor(public _filmService: FilmsService, private route: ActivatedRoute) {
    this.route.params.subscribe(parametros => {
      console.log(parametros);
      if(parametros['termino']){
        this.buscar=parametros['termino'];
        this.buscarPelicula();
      }
    })
  }

  ngOnInit() {
  }

  buscarPelicula(){
    if(this.buscar.length == 0){
      return;
    }
    this._filmService.buscarPelicula(this.buscar)
                                            .subscribe((film) => {
                                              console.log(film);
                                            })
  }

}
