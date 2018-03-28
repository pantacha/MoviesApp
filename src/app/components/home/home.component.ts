import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public _filmsService: FilmsService) {
    this._filmsService.getCartelera()
                                .subscribe((data) => {
                                  console.log(data);
                                })
  }

  ngOnInit() {
  }

}
