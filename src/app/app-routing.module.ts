import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvComponent } from './tv/tv.component';
import {SearchResultsComponent} from './search-results/search-results.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard]},
  {path:'register',component:RegistrationFormComponent},
  {path:'login',component:LoginComponent},
  {path:'movies/:category',component:MoviesComponent,canActivate:[AuthenticationGuard]},
  {path:'searchResults/:searchValue',component:SearchResultsComponent,canActivate:[AuthenticationGuard]},
  {path:'tvShows/:category',component:TvComponent,canActivate:[AuthenticationGuard]},
  {path:'movie/:movieId',component:MovieDetailsComponent,canActivate:[AuthenticationGuard]},
  {path:'tvShow/:tvShowId',component:TvShowDetailsComponent,canActivate:[AuthenticationGuard]},
{path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
