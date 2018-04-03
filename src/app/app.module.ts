import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

//Services
import {FilmsService} from './services/films.service';

//Routes
import {APP_ROUTING} from './app.routes';

//Pipes
import { FilmImagePipe } from './pipes/film-image.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { GaleriaComponent } from './components/home/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    FilmImagePipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    FilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
