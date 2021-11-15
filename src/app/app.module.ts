import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormatCategoryStringPipe } from './format-category-string.pipe';
import { ItemComponent } from './item/item.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { TimeFormatPipe } from './time-format.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { PersonCardComponent } from './person-card/person-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MoviesComponent,
    MovieDetailsComponent,
    RegistrationFormComponent,
    LoginComponent,
    TvComponent,
    TvShowDetailsComponent,
    SearchResultsComponent,
    FormatCategoryStringPipe,
    ItemComponent,
    ItemCardComponent,
    TimeFormatPipe,
    FavoritesComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    NgImageSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
