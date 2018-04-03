import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmImage'
})
export class FilmImagePipe implements PipeTransform {

  transform(film: any): any {
    let url = "http://image.tmdb.org/t/p/w500";
    if(film.backdrop_path){
      return url + film.backdrop_path;
    }else if(film.poster_path){
      return url + film.poster_path;
    }else{
      return "assets/img/no_image-1.jpg";
    }
  }

}
