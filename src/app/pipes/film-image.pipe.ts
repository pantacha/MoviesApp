import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmImage'
})
export class FilmImagePipe implements PipeTransform {

<<<<<<< HEAD
  transform(film: any, poster: boolean=false): any {
    let url = "http://image.tmdb.org/t/p/w500";
    if(poster){
      return url+film.poster_path;
    }
=======
  transform(film: any): any {
    let url = "http://image.tmdb.org/t/p/w500";
>>>>>>> 0dc2f5dca7802c3044f79e9fed6605c23c5d3c26
    if(film.backdrop_path){
      return url + film.backdrop_path;
    }else if(film.poster_path){
      return url + film.poster_path;
    }else{
      return "assets/img/no_image-1.jpg";
    }
  }

}
