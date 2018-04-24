import { Injectable } from '@angular/core';
import {Jsonp, Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FilmsService {

  private apiKey: string = "1789561a62fd413a0c2bc8b30e1ef9bf";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  films: any[] = [];

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
                        .map((data: any) => {
                          return data._body.results;
                        });
  }

  getPopulares(){

    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                          .map((data: any) => {
                            return data._body.results;
                          })
  }

  getPopularesNinos(){

    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                            .map((data: any) => {
                              return data._body.results;
                            })
  }

  buscarPelicula(texto: string){

    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                              .map((data: any) => {
                                this.films = data.json().results;
                                return data._body.results;
                              })
  }

  getFilm(id: string){

    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                        .map((data) => {
                          return data.json();
                        })

  }


}
