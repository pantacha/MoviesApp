import { Injectable } from '@angular/core';
import {Jsonp, Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FilmsService {

  private apiKey: string = "1789561a62fd413a0c2bc8b30e1ef9bf";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp: Jsonp) {

  }

  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                      .map((res) => res.json());
  }

}
