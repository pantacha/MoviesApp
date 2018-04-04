import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent implements OnInit {

  film: any;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(parametros => {
      console.log(parametros);
      
    })
  }

  ngOnInit() {
  }

}
